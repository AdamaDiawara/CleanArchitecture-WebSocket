import type { Request, Response, NextFunction } from "express";
import type { GetCurrentUserUseCase } from "../../application/usecases/auth/GetCurrentUserUseCase.js";
import { authHeaderToToken } from "../http/auth/utils.js";

export const createRequireAuth =
  (getCurrentUserUseCase: GetCurrentUserUseCase) =>
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const token = authHeaderToToken(request.headers.authorization);
    if (!token) {
      response.status(401).json({ message: "Missing access token" });
      return;
    }

    const result = await getCurrentUserUseCase.execute(token);
    if (!result.ok) {
      response.status(401).json({ message: "Invalid access token" });
      return;
    }

    request.user = result.value;
    next();
  };
