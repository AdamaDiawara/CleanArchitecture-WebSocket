"use client";

import { useAuth } from "../context/AuthContext";
import type { ApiResult } from "../types";

export function useAuthenticatedAPI() {
  const { tokens } = useAuth();

  const callWithRefresh = async <T,>(
    apiCall: (token: string) => Promise<ApiResult<T>>,
  ): Promise<ApiResult<T>> => {
    if (!tokens?.accessToken) {
      return { ok: false, status: 401, data: null, message: "Non authentifié" };
    }
    return apiCall(tokens.accessToken);
  };

  return { callWithRefresh };
}
