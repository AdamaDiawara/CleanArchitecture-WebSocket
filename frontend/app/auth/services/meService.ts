import { callAuthJson } from "./http";
import { normalizeUser } from "./userMapper";

type UserApiDto = Parameters<typeof normalizeUser>[0];

export const meService = (accessToken: string) =>
  callAuthJson<UserApiDto>("/auth/me", accessToken)
    .then((result) => {
      if (!result.ok || !result.data) return result as Omit<typeof result, "data"> & { data: null };
      return { ...result, data: normalizeUser(result.data) };
    });