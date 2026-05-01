export const authHeaderToToken = (header: string | undefined): string | null => {
  if (!header?.startsWith("Bearer ")) {
    return null;
  }

  return header.slice(7);
};
