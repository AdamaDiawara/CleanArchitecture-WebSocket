import { Router } from "express";
import { registerLimiter } from "../../middlewares/authRateLimiter.js";
import { registerSchema } from "./schemas.js";
import type { RegisterUserUseCase } from "../../../application/usecases/auth/RegisterUserUseCase.js";
import { domainErrorToStatus } from "../utils/domainErrorToStatus.js";
import { AuthPresenter } from "../../presenters/AuthPresenter.js";

export const createRegisterEmailRoute = (useCase: RegisterUserUseCase) => {
  const router = Router();

  router.post("/register/email", registerLimiter, async (request, response): Promise<void> => {
    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }

    const result = await useCase.execute(parsed.data);

    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }

    response.status(201).json(AuthPresenter.toDto(result.value.user, result.value.tokens));
  });

  return router;
};
