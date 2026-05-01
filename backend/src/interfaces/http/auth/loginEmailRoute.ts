import { Router } from "express";
import { loginLimiter } from "../../middlewares/authRateLimiter.js";
import { loginSchema } from "./schemas.js";
import type { LoginUserUseCase } from "../../../application/usecases/auth/LoginUserUseCase.js";
import { AuthPresenter } from "../../presenters/AuthPresenter.js";

export const createLoginEmailRoute = (useCase: LoginUserUseCase) => {
  const router = Router();

  router.post("/login/email", loginLimiter, async (request, response): Promise<void> => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }

    const result = await useCase.execute(parsed.data);

    if (!result.ok) {
      response.status(401).json({ message: result.error.message });
      return;
    }

    response.status(200).json(AuthPresenter.toDto(result.value.user, result.value.tokens));
  });

  return router;
};
