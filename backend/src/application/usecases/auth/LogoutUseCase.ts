import crypto from "node:crypto";
import type { IRefreshTokenRepository } from "../../ports/IRefreshTokenRepository.js";

export class LogoutUseCase {
  constructor(private readonly refreshTokenRepo: IRefreshTokenRepository) {}

  async execute(refreshToken: string): Promise<void> {
    const hash     = crypto.createHash("sha256").update(refreshToken).digest("hex");
    const existing = await this.refreshTokenRepo.findByHash(hash);
    if (existing && existing.revokedAt === null) {
      await this.refreshTokenRepo.revoke(existing.id);
    }
  }
}
