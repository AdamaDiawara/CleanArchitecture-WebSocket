import type { Request, Response, NextFunction, RequestHandler } from "express";

export const createRequireAdmin = (requireAuth: RequestHandler): RequestHandler =>
  async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    await new Promise<void>((resolve) => requireAuth(request, response, () => resolve()));

    if (response.headersSent) return;

    if (request.user?.role !== "ADMIN") {
      response.status(403).json({ message: "Accès réservé aux administrateurs" });
      return;
    }

    next();
  };
