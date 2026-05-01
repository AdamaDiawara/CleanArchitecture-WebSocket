import crypto from "node:crypto";
import type { IRefreshTokenRepository } from "../../ports/IRefreshTokenRepository.js";
import type { ITokenService } from "../../ports/ITokenService.js";
import type { AuthTokens } from "../../auth/types.js";

const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Service de composition — émet une paire (accessToken, refreshToken).
 *
 * Principe DRY : RegisterUserUseCase et LoginUserUseCase avaient exactement
 * le même code d'émission de tokens. TokenIssuer l'encapsule une seule fois
 * et est injecté dans les deux Use Cases (composition plutôt que duplication).
 */
export class TokenIssuer {
  constructor(
    private readonly refreshTokenRepo: IRefreshTokenRepository,
    private readonly tokenService:     ITokenService,
  ) {}

  async issue(userId: string): Promise<AuthTokens> {
    const accessToken  = this.tokenService.signAccessToken(userId);
    const refreshToken = this.tokenService.signRefreshToken(userId);
    const tokenHash    = crypto.createHash("sha256").update(refreshToken).digest("hex");
    const expiresAt    = new Date(Date.now() + REFRESH_TOKEN_TTL_MS);

    await this.refreshTokenRepo.create({ userId, tokenHash, expiresAt });
    return { accessToken, refreshToken };
  }
}
