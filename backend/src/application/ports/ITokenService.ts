export type TokenPayload = { userId: string };

export interface ITokenService {
  signAccessToken(userId: string): string;
  signRefreshToken(userId: string): string;
  verifyAccessToken(token: string): TokenPayload;
  verifyRefreshToken(token: string): TokenPayload;
}
