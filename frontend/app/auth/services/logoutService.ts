import { callJson } from "./http";

type LogoutResponse = {
  message?: string;
};

export const logoutService = async (refreshToken: string) =>
  callJson<LogoutResponse>("/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
