import { callJson } from "./http";
import type { AuthTokens } from "../types";

type RefreshResponse = AuthTokens & {
  message?: string;
};

export const refreshService = async (refreshToken: string) =>
  callJson<RefreshResponse>("/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
