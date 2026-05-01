import type { DocumentWithOwner } from "../../ports/IDocumentRepository.js";
import type { IDocumentRepository } from "../../ports/IDocumentRepository.js";

export class GetPendingDocumentsUseCase {
  constructor(private readonly documentRepository: IDocumentRepository) {}

  async execute(): Promise<DocumentWithOwner[]> {
    return this.documentRepository.findAllPending();
  }
}
