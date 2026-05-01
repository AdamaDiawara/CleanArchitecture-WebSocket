import type { ApiResult } from "../types";

export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

/** Construit une URL d'image en normalisant les séparateurs (Windows → slash Unix). */
export const buildImageUrl = (relativePath: string): string =>
  `${API_BASE}/${relativePath.replace(/\\/g, "/")}`;

const FETCH_TIMEOUT_MS = 10000;

export const callJson = async <T>(
  path: string,
  fetchOptions: RequestInit = {},
): Promise<ApiResult<T>> => {
  let response: Response;

  /* Combine le signal existant (s'il y en a un) avec le timeout */
  let controller: AbortController | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let signal = fetchOptions.signal ?? undefined;

  if (typeof AbortController !== "undefined") {
    controller = new AbortController();
    timeoutId  = setTimeout(() => controller!.abort(), FETCH_TIMEOUT_MS);
    signal     = controller.signal;
  }

  try {
    response = await fetch(`${API_BASE}${path}`, { ...fetchOptions, signal });
  } catch (err) {
    if (timeoutId) clearTimeout(timeoutId);
    const isTimeout = (err as Error)?.name === "AbortError";
    return {
      ok:      false,
      status:  0,
      data:    null,
      message: isTimeout ? "Délai d'attente dépassé, réessayez" : "Serveur indisponible",
    };
  }
  if (timeoutId) clearTimeout(timeoutId);

  if (response.status === 204) {
    return { ok: true, status: 204, data: null };
  }

  const body = (await response.json().catch(() => null)) as (T & { message?: string }) | null;

  return {
    ok:      response.ok,
    status:  response.status,
    data:    response.ok ? (body as T | null) : null,
    message: body?.message,
  };
};

export const callAuthJson = <T>(
  path: string,
  accessToken: string,
  fetchOptions: RequestInit = {},
): Promise<ApiResult<T>> =>
  callJson<T>(path, {
    ...fetchOptions,
    headers: {
      ...fetchOptions.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });