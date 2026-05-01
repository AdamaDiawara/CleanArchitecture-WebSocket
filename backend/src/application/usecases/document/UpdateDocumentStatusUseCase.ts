import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IDocumentRepository, DocumentRecord, DocumentStatus } from "../../ports/IDocumentRepository.js";
import type { INotificationGateway } from "../../ports/INotificationGateway.js";
import { DocumentNotFoundError } from "../../../domain/errors/DocumentErrors.js";

export type UpdateDocumentStatusInput = {
  documentId: string;
  status:     DocumentStatus;
};

const DOC_TYPE_LABELS: Record<string, string> = {
  kbis:                 "Extrait Kbis",
  id_card:              "Pièce d'identité",
  driving_license:      "Permis de conduire",
  vehicle_insurance:    "Assurance véhicule",
  vehicle_registration: "Carte grise",
  food_hygiene:         "Attestation d'hygiène",
};

export class UpdateDocumentStatusUseCase
  implements UseCase<UpdateDocumentStatusInput, DocumentRecord, DocumentNotFoundError>
{
  constructor(
    private readonly documentRepository:   IDocumentRepository,
    private readonly notificationGateway?: INotificationGateway,
  ) {}

  async execute(input: UpdateDocumentStatusInput): Promise<Result<DocumentRecord, DocumentNotFoundError>> {
    const updated = await this.documentRepository.updateStatus(input.documentId, input.status);
    if (!updated) return failure(new DocumentNotFoundError());

    this.sendNotification(updated);

    const allDocuments = await this.documentRepository.findByUserId(updated.userId);
    const requiredTypes = this.getRequiredTypes(allDocuments);
    const allApproved   = requiredTypes.length > 0 && requiredTypes.every(
      (type) => allDocuments.find((doc) => doc.type === type)?.status === "approved",
    );

    if (allApproved) {
      this.notificationGateway?.notifyUser(updated.userId, {
        type:    "account_activated",
        title:   "Compte activé 🎉",
        message: "Tous vos documents ont été validés. Vous pouvez maintenant mener vos activités.",
      });
    }

    return ok(updated);
  }

  private sendNotification(document: DocumentRecord): void {
    if (!this.notificationGateway) return;
    const label = DOC_TYPE_LABELS[document.type] ?? document.type;

    if (document.status === "approved") {
      this.notificationGateway.notifyUser(document.userId, {
        type:    "document_validated",
        title:   "Document validé ✓",
        message: `Votre ${label} a été validé par notre équipe.`,
      });
    } else if (document.status === "rejected") {
      this.notificationGateway.notifyUser(document.userId, {
        type:    "document_rejected",
        title:   "Document refusé",
        message: `Votre ${label} a été refusé. Veuillez le soumettre à nouveau.`,
      });
    }
  }

  private getRequiredTypes(documents: DocumentRecord[]): string[] {
    const types = [...new Set(documents.map((doc) => doc.type))];
    const hasKbis = types.includes("kbis");
    if (hasKbis) return ["kbis", "id_card", "food_hygiene"];
    const hasLicense = types.includes("driving_license");
    if (hasLicense) return ["id_card", "driving_license", "vehicle_insurance", "vehicle_registration"];
    return [];
  }
}
