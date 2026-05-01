import type { DocumentRecord, DocumentWithOwner } from "../../application/ports/IDocumentRepository.js";
import type { DocumentResponseDto } from "../dtos/document/DocumentResponseDto.js";
import type { AdminDocumentResponseDto } from "../dtos/document/AdminDocumentResponseDto.js";

export class DocumentPresenter {
  static toDto(document: DocumentRecord): DocumentResponseDto {
    return {
      id:        document.id,
      userId:    document.userId,
      type:      document.type,
      status:    document.status,
      mimeType:  document.mimeType,
      createdAt: document.createdAt instanceof Date
        ? document.createdAt.toISOString()
        : String(document.createdAt),
    };
  }

  static toDtoList(documents: DocumentRecord[]): DocumentResponseDto[] {
    return documents.map((document) => DocumentPresenter.toDto(document));
  }

  static toAdminDto(document: DocumentWithOwner): AdminDocumentResponseDto {
    return {
      id:         document.id,
      type:       document.type,
      status:     document.status,
      mimeType:   document.mimeType,
      filePath:   document.filePath,
      createdAt:  document.createdAt instanceof Date
        ? document.createdAt.toISOString()
        : String(document.createdAt),
      ownerName:  document.ownerName,
      ownerEmail: document.ownerEmail,
    };
  }

  static toAdminDtoList(documents: DocumentWithOwner[]): AdminDocumentResponseDto[] {
    return documents.map((document) => DocumentPresenter.toAdminDto(document));
  }
}