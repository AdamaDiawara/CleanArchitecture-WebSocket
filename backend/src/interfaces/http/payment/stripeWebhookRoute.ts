import { Router } from "express";
import type { Request, Response } from "express";
import type { IPaymentGateway } from "../../../application/ports/IPaymentGateway.js";
import type { IPaymentMethodRepository } from "../../../application/ports/IPaymentMethodRepository.js";

/**
 * Route dédiée au webhook Stripe.
 * Doit recevoir le body brut (raw buffer) — NE PAS passer express.json() avant cette route.
 * Stripe vérifie la signature pour garantir l'authenticité de l'événement.
 */
export function createStripeWebhookRoute(
  paymentGateway:          IPaymentGateway,
  paymentMethodRepository: IPaymentMethodRepository,
): Router {
  const router = Router();

  router.post(
    "/webhook",
    async (request: Request, response: Response) => {
      const signature = request.headers["stripe-signature"];
      if (!signature || typeof signature !== "string") {
        response.status(400).json({ message: "Signature Stripe manquante" });
        return;
      }

      let event;
      try {
        event = paymentGateway.constructWebhookEvent(
          (request as Request & { rawBody?: string }).rawBody ?? JSON.stringify(request.body),
          signature,
        );
      } catch {
        response.status(400).json({ message: "Signature Stripe invalide" });
        return;
      }

      switch (event.type) {
        case "setup_intent.succeeded": {
          const setupIntent = event.data.object as {
            id: string;
            customer: string;
            payment_method: string;
            metadata?: { userId?: string };
          };

          const userId = setupIntent.metadata?.userId;
          if (userId && setupIntent.payment_method) {
            const existingCount = await paymentMethodRepository.countByUserId(userId);
            const existing = await paymentMethodRepository.findByStripePaymentMethodId(
              setupIntent.payment_method,
            );

            if (!existing && existingCount < 5) {
              await paymentMethodRepository.save({
                userId:                userId,
                stripePaymentMethodId: setupIntent.payment_method,
                type:                  "card",
                brand:                 "unknown",
                last4:                 "0000",
                expiryMonth:           0,
                expiryYear:            0,
                isDefault:             existingCount === 0,
              });
            }
          }
          break;
        }

        case "payment_intent.succeeded":
          break;

        case "payment_intent.payment_failed":
          break;
      }

      response.json({ received: true });
    },
  );

  return router;
}
