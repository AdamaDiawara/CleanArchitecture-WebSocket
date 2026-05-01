import type { DocumentWithOwner, DocumentStatus } from "../../ports/IDocumentRepository.js";
import type { IDocumentRepository } from "../../ports/IDocumentRepository.js";

export class GetDocumentsByStatusUseCase {
  constructor(private readonly documentRepository: IDocumentRepository) {}

  async execute(status: DocumentStatus): Promise<DocumentWithOwner[]> {
    return this.documentRepository.findAllByStatus(status);
  }
}
