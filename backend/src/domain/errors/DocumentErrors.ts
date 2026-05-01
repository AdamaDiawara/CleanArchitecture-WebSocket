import { DomainError } from "./DomainError.js";

export class DocumentNotFoundError extends DomainError {
  readonly code = "DOCUMENT_NOT_FOUND";
  constructor() { super("Document not found"); }
}

export class InvalidDocumentStatusError extends DomainError {
  readonly code = "INVALID_DOCUMENT_STATUS";
  constructor() { super("Invalid document status transition"); }
}
