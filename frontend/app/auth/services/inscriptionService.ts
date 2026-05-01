import { callJson } from "./http";
import type { AuthTokens, User, RegisterInput } from "../types";
import { normalizeUser } from "./userMapper";

type InscriptionResponse = {
  user: User;
  tokens: AuthTokens;
  message?: string;
};

type InscriptionResponseDto = Omit<InscriptionResponse, "user"> & {
  user: Parameters<typeof normalizeUser>[0];
};

export const inscriptionService = async (payload: RegisterInput) => {
  const result = await callJson<InscriptionResponseDto>("/auth/register/email", {
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
