import { Router } from "express";
import type { Request, Response, RequestHandler } from "express";
import { z } from "zod";
import type { GetSavedPaymentMethodsUseCase } from "../../../application/usecases/payment/GetSavedPaymentMethodsUseCase.js";
import type { ConfirmPaymentMethodUseCase } from "../../../application/usecases/payment/ConfirmPaymentMethodUseCase.js";
import type { RemovePaymentMethodUseCase } from "../../../application/usecases/payment/RemovePaymentMethodUseCase.js";
import { domainErrorToStatus } from "../utils/domainErrorToStatus.js";
import { PaymentPresenter } from "../../presenters/PaymentPresenter.js";

const confirmPaymentMethodSchema = z.object({
  stripePaymentMethodId: z.string().min(1),
});

export function createPaymentMethodRoutes(
  getSavedPaymentMethodsUseCase: GetSavedPaymentMethodsUseCase,
  confirmPaymentMethodUseCase:   ConfirmPaymentMethodUseCase,
  removePaymentMethodUseCase:    RemovePaymentMethodUseCase,
  requireAuth: RequestHandler,
): Router {
  const router = Router();

  router.get("/", requireAuth, async (request: Request, response: Response) => {
    const paymentMethods = await getSavedPaymentMethodsUseCase.execute(request.user!.id);
    response.json(PaymentPresenter.toPaymentMethodDtoList(paymentMethods));
  });

  router.post("/confirm", requireAuth, async (request: Request, response: Response) => {
    const parsed = confirmPaymentMethodSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Données invalides", errors: parsed.error.issues });
      return;
    }

    const result = await confirmPaymentMethodUseCase.execute({
      userId:                request.user!.id,
      stripePaymentMethodId: parsed.data.stripePaymentMethodId,
    });

    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }

    response.status(201).json(PaymentPresenter.toPaymentMethodDto(result.value));
  });

  router.delete("/:id", requireAuth, async (request: Request, response: Response) => {
    const { id } = request.params;
    if (!id) { response.status(400).json({ message: "Identifiant manquant" }); return; }

    const result = await removePaymentMethodUseCase.execute({
      userId:          request.user!.id,
      paymentMethodId: id,
    });

    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }

    response.status(204).send();
  });

  return router;
}