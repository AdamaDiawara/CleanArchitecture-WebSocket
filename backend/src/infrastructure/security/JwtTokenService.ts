import jwt from "jsonwebtoken";
import { randomUUID } from "node:crypto";
import type { ITokenService, TokenPayload } from "../../application/ports/ITokenService.js";

type Config = {
  jwtAccessSecret: string;
  jwtRefreshSecret: string;
};

export class JwtTokenService implements ITokenService {
  constructor(private readonly config: Config) {}

  signAccessToken(userId: string): string {
    return jwt.sign({ sub: userId, type: "access" }, this.config.jwtAccessSecret, {
      expiresIn: "30d",
    });
  }

  signRefreshToken(userId: string): string {
    return jwt.sign({ sub: userId, type: "refresh" }, this.config.jwtRefreshSecret, {
      expiresIn: "7d",
      jwtid: randomUUID(),
    });
  }

  verifyAccessToken(token: string): TokenPayload {
    const payload = jwt.verify(token, this.config.jwtAccessSecret) as {
      sub: string;
      type: string;
    };
    if (payload.type !== "access") throw new Error("Invalid token type");
    return { userId: payload.sub };
  }

  verifyRefreshToken(token: string): TokenPayload {
    const payload = jwt.verify(token, this.config.jwtRefreshSecret) as {
      sub: string;
      type: string;
    };
    if (payload.type !== "refresh") throw new Error("Invalid token type");
    return { userId: payload.sub };
  }
}
