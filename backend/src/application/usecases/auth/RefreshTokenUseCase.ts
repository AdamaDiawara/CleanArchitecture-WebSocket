import crypto from "node:crypto";
import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IRefreshTokenRepository } from "../../ports/IRefreshTokenRepository.js";
import type { ITokenService } from "../../ports/ITokenService.js";
import type { AuthTokens } from "../../auth/types.js";
import { TokenIssuer } from "./TokenIssuer.js";
import { InvalidTokenError } from "../../../domain/errors/AuthErrors.js";

export class RefreshTokenUseCase
  implements UseCase<string, AuthTokens, InvalidTokenError>
{
  private readonly tokenIssuer: TokenIssuer;

  constructor(
    private readonly refreshTokenRepo: IRefreshTokenRepository,
    private readonly tokenService:     ITokenService,
  ) {
    this.tokenIssuer = new TokenIssuer(refreshTokenRepo, tokenService);
  }

  async execute(refreshToken: string): Promise<Result<AuthTokens, InvalidTokenError>> {
    let userId: string;
    try {
      ({ userId } = this.tokenService.verifyRefreshToken(refreshToken));
    } catch {
      return failure(new InvalidTokenError());
    }

    const hash     = crypto.createHash("sha256").update(refreshToken).digest("hex");
    const existing = await this.refreshTokenRepo.findByHash(hash);

    if (!existing || existing.revokedAt !== null || existing.expiresAt < new Date()) {
      return failure(new InvalidTokenError());
    }

    await this.refreshTokenRepo.revoke(existing.id);
    return ok(await this.tokenIssuer.issue(userId));
  }
}
