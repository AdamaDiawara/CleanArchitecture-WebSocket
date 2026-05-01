import { Router } from "express";
import type { RequestHandler } from "express";
import { UserPresenter } from "../../presenters/UserPresenter.js";

export const createMeRoute = (requireAuth: RequestHandler) => {
  const router = Router();

  router.get("/me", requireAuth, (request, response) => {
    response.status(200).json(UserPresenter.toDto(request.user!));
  });

  return router;
};
