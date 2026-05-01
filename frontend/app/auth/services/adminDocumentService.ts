import { callAuthJson } from "./http";

export type AdminDocumentDto = {
  id:         string;
  type:       string;
  status:     "pending" | "approved" | "rejected";
  mimeType:   string;
  filePath:   string;
  createdAt:  string;
  ownerName:  string;
  ownerEmail: string;
};

export type DocumentStatusFilter = "pending" | "approved" | "rejected";

export const getDocumentsByStatus = (status: DocumentStatusFilter, accessToken: string) =>
  callAuthJson<AdminDocumentDto[]>(`/admin/documents?status=${status}`, accessToken);

export const getPendingDocuments = (accessToken: string) =>
  getDocumentsByStatus("pending", accessToken);

export const approveDocument = (documentId: string, accessToken: string) =>
  callAuthJson<AdminDocumentDto>(`/admin/documents/${documentId}/status`, accessToken, {
    method:  "PATCH",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ status: "approved" }),
  });

export const rejectDocument = (documentId: string, accessToken: string) =>
  callAuthJson<AdminDocumentDto>(`/admin/documents/${documentId}/status`, accessToken, {
    method:  "PATCH",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ status: "rejected" }),
  });
