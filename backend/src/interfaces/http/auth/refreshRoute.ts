import { Router } from "express";
import { refreshSchema } from "./schemas.js";
import type { RefreshTokenUseCase } from "../../../application/usecases/auth/RefreshTokenUseCase.js";

export const createRefreshRoute = (useCase: RefreshTokenUseCase) => {
  const router = Router();

  router.post("/refresh", async (request, response): Promise<void> => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Payload invalide", errors: parsed.error.issues });
      return;
    }

    const result = await useCase.execute(parsed.data.refreshToken);

    if (!result.ok) {
      response.status(401).json({ message: result.error.message });
      return;
    }

    response.status(200).json(result.value);
  });

  return router;
};
