export type RefreshTokenRecord = {
  id: string;
  userId: string;
  expiresAt: Date;
  revokedAt: Date | null;
};

export interface IRefreshTokenRepository {
  create(input: { userId: string; tokenHash: string; expiresAt: Date }): Promise<void>;
  findByHash(hash: string): Promise<RefreshTokenRecord | null>;
  revoke(id: string): Promise<void>;
  pruneExpired(): Promise<number>;
}
