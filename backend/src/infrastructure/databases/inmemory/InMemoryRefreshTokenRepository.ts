import type {
  IRefreshTokenRepository,
  RefreshTokenRecord,
} from "../../../application/ports/IRefreshTokenRepository.js";
import { InMemoryRepository } from "./InMemoryRepository.js";
import crypto from "node:crypto";

type StoredToken = RefreshTokenRecord & { tokenHash: string };

/**
 * Adaptateur in-memory — hérite de InMemoryRepository<StoredToken>.
 * Implémente IRefreshTokenRepository sans aucune dépendance externe.
 */
export class InMemoryRefreshTokenRepository
  extends InMemoryRepository<StoredToken>
  implements IRefreshTokenRepository
{
  async create(input: { userId: string; tokenHash: string; expiresAt: Date }): Promise<void> {
    this.save({
      id:        crypto.randomUUID(),
      userId:    input.userId,
      tokenHash: input.tokenHash,
      expiresAt: input.expiresAt,
      revokedAt: null,
    });
  }

  async findByHash(hash: string): Promise<RefreshTokenRecord | null> {
    return this.findWhere((storedToken) => storedToken.tokenHash === hash);
  }

  async revoke(id: string): Promise<void> {
    const token = this.getById(id);
    if (token) this.save({ ...token, revokedAt: new Date() });
  }

  async pruneExpired(): Promise<number> {
    const currentDateTime = new Date();
    const expiredTokens = this.filterWhere((storedToken) => storedToken.expiresAt < currentDateTime || storedToken.revokedAt !== null);
    expiredTokens.forEach((storedToken) => this.deleteById(storedToken.id));
    return expiredTokens.length;
  }
}
