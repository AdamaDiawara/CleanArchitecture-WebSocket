import { Router } from "express";
import type { Request, Response, RequestHandler } from "express";
import type { CreateSetupIntentUseCase } from "../../../application/usecases/payment/CreateSetupIntentUseCase.js";
import { domainErrorToStatus } from "../utils/domainErrorToStatus.js";
import { PaymentPresenter } from "../../presenters/PaymentPresenter.js";

export function createSetupIntentRoute(
  createSetupIntentUseCase: CreateSetupIntentUseCase,
  requireAuth: RequestHandler,
): Router {
  const router = Router();

  router.post("/setup-intent", requireAuth, async (request: Request, response: Response) => {
    const result = await createSetupIntentUseCase.execute({
      userId:           request.user!.id,
      userEmail:        request.user!.email,
      stripeCustomerId: request.user!.stripe_customer_id ?? null,
    });

    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }

    response.status(201).json(PaymentPresenter.toSetupIntentDto(result.value));
  });

  return router;
}