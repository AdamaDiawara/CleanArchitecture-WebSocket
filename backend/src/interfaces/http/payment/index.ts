import { Router } from "express";
import type { RequestHandler } from "express";
import type { CreatePaymentIntentUseCase } from "../../../application/usecases/payment/CreatePaymentIntentUseCase.js";
import type { CreateSetupIntentUseCase } from "../../../application/usecases/payment/CreateSetupIntentUseCase.js";
import type { GetSavedPaymentMethodsUseCase } from "../../../application/usecases/payment/GetSavedPaymentMethodsUseCase.js";
import type { ConfirmPaymentMethodUseCase } from "../../../application/usecases/payment/ConfirmPaymentMethodUseCase.js";
import type { RemovePaymentMethodUseCase } from "../../../application/usecases/payment/RemovePaymentMethodUseCase.js";
import type { IPaymentGateway } from "../../../application/ports/IPaymentGateway.js";
import type { IPaymentMethodRepository } from "../../../application/ports/IPaymentMethodRepository.js";
import { createPaymentIntentRoute } from "./createPaymentIntentRoute.js";
import { createSetupIntentRoute } from "./createSetupIntentRoute.js";
import { createPaymentMethodRoutes } from "./paymentMethodRoutes.js";
import { createStripeWebhookRoute } from "./stripeWebhookRoute.js";

export function createPaymentRoutes(
  createPaymentIntentUseCase:    CreatePaymentIntentUseCase,
  createSetupIntentUseCase:      CreateSetupIntentUseCase,
  getSavedPaymentMethodsUseCase: GetSavedPaymentMethodsUseCase,
  confirmPaymentMethodUseCase:   ConfirmPaymentMethodUseCase,
  removePaymentMethodUseCase:    RemovePaymentMethodUseCase,
  paymentGateway:                IPaymentGateway,
  paymentMethodRepository:       IPaymentMethodRepository,
  requireAuth: RequestHandler,
): Router {
  const router = Router();

  router.use(createPaymentIntentRoute(createPaymentIntentUseCase, requireAuth));
  router.use(createSetupIntentRoute(createSetupIntentUseCase, requireAuth));
  router.use("/methods", createPaymentMethodRoutes(
    getSavedPaymentMethodsUseCase,
    confirmPaymentMethodUseCase,
    removePaymentMethodUseCase,
    requireAuth,
  ));
  router.use(createStripeWebhookRoute(paymentGateway, paymentMethodRepository));

  return router;
}