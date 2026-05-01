import { Router } from "express";
import type { Request, Response, RequestHandler } from "express";
import { z } from "zod";
import type { GetPendingDocumentsUseCase } from "../../../application/usecases/document/GetPendingDocumentsUseCase.js";
import type { GetDocumentsByStatusUseCase } from "../../../application/usecases/document/GetDocumentsByStatusUseCase.js";
import type { UpdateDocumentStatusUseCase } from "../../../application/usecases/document/UpdateDocumentStatusUseCase.js";
import type { GetAdminStatsUseCase } from "../../../application/usecases/admin/GetAdminStatsUseCase.js";
import { domainErrorToStatus } from "../utils/domainErrorToStatus.js";
import { DocumentPresenter } from "../../presenters/DocumentPresenter.js";

const updateStatusSchema = z.object({
  status: z.enum(["approved", "rejected"]),
});

const statusQuerySchema = z.enum(["pending", "approved", "rejected"]).default("pending");

export function createAdminDocumentRoutes(
  getPendingDocumentsUseCase:   GetPendingDocumentsUseCase,
  getDocumentsByStatusUseCase:  GetDocumentsByStatusUseCase,
  updateDocumentStatusUseCase:  UpdateDocumentStatusUseCase,
  getAdminStatsUseCase:         GetAdminStatsUseCase,
  requireAdmin: RequestHandler,
): Router {
  const router = Router();

  router.get("/stats", requireAdmin, async (_request: Request, response: Response) => {
    const stats = await getAdminStatsUseCase.execute();
    response.json(stats);
  });

  router.get("/documents", requireAdmin, async (request: Request, response: Response) => {
    const parsed = statusQuerySchema.safeParse(request.query.status);
    const status = parsed.success ? parsed.data : "pending";

    const documents = status === "pending"
      ? await getPendingDocumentsUseCase.execute()
      : await getDocumentsByStatusUseCase.execute(status);

    response.json(DocumentPresenter.toAdminDtoList(documents));
  });

  router.patch("/documents/:id/status", requireAdmin, async (request: Request, response: Response) => {
    const { id } = request.params;
    if (!id) { response.status(400).json({ message: "Identifiant manquant" }); return; }

    const parsed = updateStatusSchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(400).json({ message: "Statut invalide (approved | rejected)" });
      return;
    }

    const result = await updateDocumentStatusUseCase.execute({
      documentId: id,
      status:     parsed.data.status,
    });

    if (!result.ok) {
      response.status(domainErrorToStatus(result.error)).json({ message: result.error.message });
      return;
    }

    response.json(DocumentPresenter.toDto(result.value));
  });

  return router;
}
