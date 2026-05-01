import { callAuthJson } from "./http";

export type DocumentType =
  | "kbis"
  | "id_card"
  | "driving_license"
  | "vehicle_insurance"
  | "vehicle_registration"
  | "food_hygiene";

export type DocumentRecord = {
  id: string;
  userId: string;
  type: DocumentType;
  status: "pending" | "approved" | "rejected";
  mimeType: string;
  createdAt: string;
};

export const uploadDocument = (type: DocumentType, file: File, accessToken: string) => {
  const body = new FormData();
  body.append("type", type);
  body.append("file", file);
  return callAuthJson<DocumentRecord>("/documents/upload", accessToken, { method: "POST", body });
};

export const getMyDocuments = (accessToken: string) =>
  callAuthJson<DocumentRecord[]>("/documents/my", accessToken);