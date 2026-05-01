const TOKENS_KEY = "ecoeats_tokens";

/** Lit le token depuis localStorage (mis à jour après refresh). */
export const getStoredAccessToken = (): string | null => {
  try {
    const serializedTokens = localStorage.getItem(TOKENS_KEY);
    if (!serializedTokens) return null;
    return (JSON.parse(serializedTokens) as { accessToken?: string }).accessToken ?? null;
  } catch {
    return null;
  }
};
