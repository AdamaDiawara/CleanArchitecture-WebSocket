export type AdminDocumentResponseDto = {
  id:         string;
  type:       string;
  status:     "pending" | "approved" | "rejected";
  mimeType:   string;
  filePath:   string;
  createdAt:  string;
  ownerName:  string;
  ownerEmail: string;
};
