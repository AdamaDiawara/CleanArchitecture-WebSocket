import type { IRefreshTokenRepository } from "../../ports/IRefreshTokenRepository.js";

export class PruneExpiredRefreshTokensUseCase {
  constructor(private readonly refreshTokenRepo: IRefreshTokenRepository) {}

  execute(): Promise<number> {
    return this.refreshTokenRepo.pruneExpired();
  }
}