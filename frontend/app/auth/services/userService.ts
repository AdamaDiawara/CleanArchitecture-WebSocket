import { callAuthJson, API_BASE } from "./http";
import { normalizeUser } from "./userMapper";

type UserApiDto = Parameters<typeof normalizeUser>[0];

export const getAvatarUrl = (photoUrl: string | null | undefined): string | null =>
  photoUrl ? `${API_BASE}/uploads/${photoUrl}` : null;

export const updateProfile = (
  input: { name?: string; phone?: string },
  accessToken: string,
) =>
  callAuthJson<UserApiDto>("/users/me", accessToken, {
    method:  "PATCH",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(input),
  }).then((result) => {
    if (!result.ok || !result.data) return result as Omit<typeof result, "data"> & { data: null };
    return { ...result, data: normalizeUser(result.data) };
  });

export const uploadAvatar = (file: File, accessToken: string) => {
  const body = new FormData();
  body.append("avatar", file);
  return callAuthJson<UserApiDto>("/users/me/avatar", accessToken, { method: "POST", body })
    .then((result) => {
      if (!result.ok || !result.data) return result as Omit<typeof result, "data"> & { data: null };
      return { ...result, data: normalizeUser(result.data) };
    });
};