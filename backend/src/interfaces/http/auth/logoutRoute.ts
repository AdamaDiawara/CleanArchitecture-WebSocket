import { Router } from "express";
import { refreshSchema } from "./schemas.js";
import type { LogoutUseCase } from "../../../application/usecases/auth/LogoutUseCase.js";

export const createLogoutRoute = (useCase: LogoutUseCase) => {
  const router = Router();

  router.post("/logout", async (request, response): Promise<void> => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }

    await useCase.execute(parsed.data.refreshToken);
    response.status(204).send();
  });

  return router;
};
