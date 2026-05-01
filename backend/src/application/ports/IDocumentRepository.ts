export type DocumentType =
  | "kbis"
  | "id_card"
  | "driving_license"
  | "vehicle_insurance"
  | "vehicle_registration"
  | "food_hygiene";

export type DocumentStatus = "pending" | "approved" | "rejected";

export type DocumentRecord = {
  id: string;
  userId: string;
  type: DocumentType;
  filePath: string;
  mimeType: string;
  status: DocumentStatus;
  createdAt: Date;
};

export type DocumentWithOwner = DocumentRecord & {
  ownerName:  string;
  ownerEmail: string;
};

export type DocumentStatusStats = {
  pending:  number;
  approved: number;
  rejected: number;
};

export interface IDocumentRepository {
  getStatsByStatus(): Promise<DocumentStatusStats>;
  findAllByStatus(status: DocumentStatus): Promise<DocumentWithOwner[]>;
  create(input: {
    userId:   string;
    type:     DocumentType;
    filePath: string;
    mimeType: string;
  }): Promise<DocumentRecord>;
  findByUserId(userId: string): Promise<DocumentRecord[]>;
  findAllPending(): Promise<DocumentWithOwner[]>;
  updateStatus(id: string, status: DocumentStatus): Promise<DocumentRecord>;
}
