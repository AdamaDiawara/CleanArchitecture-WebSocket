import { callJson } from "./http";
import type { AuthTokens, User } from "../types";
import { normalizeUser } from "./userMapper";

type AuthentificationPayload = {
  email: string;
  password: string;
};

type AuthentificationResponse = {
  user: User;
  tokens: AuthTokens;
  message?: string;
};

type AuthentificationResponseDto = Omit<AuthentificationResponse, "user"> & {
  user: Parameters<typeof normalizeUser>[0];
};

export const authentificationService = async (
  payload: AuthentificationPayload
) => {
  const result = await callJson<AuthentificationResponseDto>("/auth/login/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!result.ok || !result.data) {
    return result as Omit<typeof result, "data"> & { data: null };
  }

  return {
    ...result,
    data: {
      ...result.data,
      user: normalizeUser(result.data.user),
    },
  };
};
