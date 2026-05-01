import type {
  IDocumentRepository,
  DocumentRecord,
  DocumentType,
} from "../../../application/ports/IDocumentRepository.js";
import { InMemoryRepository } from "./InMemoryRepository.js";
import crypto from "node:crypto";

/**
 * Adaptateur in-memory — hérite de InMemoryRepository<DocumentRecord>.
 * Implémente IDocumentRepository sans aucune dépendance externe.
 */
export class InMemoryDocumentRepository
  extends InMemoryRepository<DocumentRecord>
  implements IDocumentRepository
{
  async create(input: {
    userId:   string;
    type:     DocumentType;
    filePath: string;
    mimeType: string;
  }): Promise<DocumentRecord> {
    const documentRecord: DocumentRecord = {
      id:        crypto.randomUUID(),
      userId:    input.userId,
      type:      input.type,
      filePath:  input.filePath,
      mimeType:  input.mimeType,
      status:    "pending",
      createdAt: new Date(),
    };
    return this.save(documentRecord);
  }

  async findByUserId(userId: string): Promise<DocumentRecord[]> {
    return this.filterWhere((documentRecord) => documentRecord.userId === userId);
  }
}
