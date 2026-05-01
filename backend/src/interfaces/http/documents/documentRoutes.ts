import { Router } from "express";
import type { Request, Response, RequestHandler } from "express";
import multer from "multer";
import path from "node:path";
import { mkdirSync } from "node:fs";
import { z } from "zod";
import type { IDocumentRepository } from "../../../application/ports/IDocumentRepository.js";
import type { INotificationGateway } from "../../../application/ports/INotificationGateway.js";
import { DocumentPresenter } from "../../presenters/DocumentPresenter.js";

const UPLOADS_DIR  = "uploads";
const ADMINS_ROOM  = "admins";
mkdirSync(UPLOADS_DIR, { recursive: true });

const documentUploadStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename:    (_req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${fileExtension}`);
  },
});

const documentUploadMiddleware = multer({
  storage: documentUploadStorage,
  limits:  { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "application/pdf"];
    cb(null, allowedMimeTypes.includes(file.mimetype));
  },
});

const docTypeSchema = z.enum([
  "kbis", "id_card", "driving_license",
  "vehicle_insurance", "vehicle_registration", "food_hygiene",
]);

export function createDocumentRoutes(
  documentRepository:   IDocumentRepository,
  requireAuth:          RequestHandler,
  notificationGateway?: INotificationGateway,
): Router {
  const router = Router();

  router.post(
    "/upload",
    requireAuth,
    documentUploadMiddleware.single("file"),
    async (request: Request, response: Response) => {
      const parsedDocumentType = docTypeSchema.safeParse(request.body.type);
      if (!parsedDocumentType.success) {
        response.status(400).json({ message: "Type de document invalide" });
        return;
      }
      if (!request.file) {
        response.status(400).json({ message: "Aucun fichier fourni" });
        return;
      }
      try {
        const documentRecord = await documentRepository.create({
          userId:   request.user!.id,
          type:     parsedDocumentType.data,
          filePath: request.file.path,
          mimeType: request.file.mimetype,
        });

        notificationGateway?.broadcastToRoom(ADMINS_ROOM, "document:new", {
          documentId: documentRecord.id,
          type:       documentRecord.type,
          userId:     documentRecord.userId,
        });

        response.status(201).json(DocumentPresenter.toDto(documentRecord));
      } catch {
        response.status(500).json({ message: "Erreur lors de l'enregistrement du document" });
      }
    },
  );

  router.get("/my", requireAuth, async (request: Request, response: Response) => {
    try {
      const documents = await documentRepository.findByUserId(request.user!.id);
      response.json(DocumentPresenter.toDtoList(documents));
    } catch {
      response.status(500).json({ message: "Erreur lors de la récupération des documents" });
    }
  });

  return router;
}
