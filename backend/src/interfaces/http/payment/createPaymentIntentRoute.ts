import { Router } from "express";
import type { Request, Response, RequestHandler } from "express";
import { z } from "zod";
import type { CreatePaymentIntentUseCase } from "../../../application/usecases/payment/CreatePaymentIntentUseCase.js";
import { domainErrorToStatus } from "../utils/domainErrorToStatus.js";
import { PaymentPresenter } from "../../presenters/PaymentPresenter.js";

const createPaymentIntentSchema = z.object({
  amount:   z.number().int().positive(),
  currency: z.string().length(3).default("eur"),
  orderId:  z.string().uuid().optional(),
});

export function createPaymentIntentRoute(
  createPaymentIntentUseCase: CreatePaymentIntentUseCase,
  requireAuth: RequestHandler,
): Router {
  const router = Router();

  router.post("/create-intent", requireAuth, async (request: Request, response: Response) => {
    const parsed = createPaymentIntentSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Données invalides", errors: parsed.error.issues });
      return;
    }

    const result = await createPaymentIntentUseCase.execute({
      userId:           request.user!.id,
      userEmail:        request.user!.email,
      stripeCustomerId: request.user!.stripe_customer_id ?? null,
      amount:           parsed.data.amount,
      currency:         parsed.data.currency,
      ...(parsed.data.orderId !== undefined && { orderId: parsed.data.orderId }),
    });

    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }

    response.status(201).json(PaymentPresenter.toPaymentIntentDto(result.value));
  });

  return router;
}