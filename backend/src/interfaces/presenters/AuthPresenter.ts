import type { User, AuthTokens } from "../../application/auth/types.js";
import type { AuthResponseDto, TokensDto } from "../dtos/auth/AuthResponseDto.js";
import { UserPresenter } from "./UserPresenter.js";

export class AuthPresenter {
  static toDto(user: User, tokens: AuthTokens): AuthResponseDto {
    return {
      user:   UserPresenter.toDto(user),
      tokens: AuthPresenter.tokensToDto(tokens),
    };
  }

  static tokensToDto(tokens: AuthTokens): TokensDto {
    return {
      accessToken:  tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }
}