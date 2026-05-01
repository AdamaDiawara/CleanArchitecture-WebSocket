import { Router } from "express";
import type { RequestHandler } from "express";
import type { IUserRepository } from "../../../application/ports/IUserRepository.js";
import type { IRefreshTokenRepository } from "../../../application/ports/IRefreshTokenRepository.js";
import type { ITokenService } from "../../../application/ports/ITokenService.js";
import type { IPasswordHasher } from "../../../application/ports/IPasswordHasher.js";
import { RegisterUserUseCase } from "../../../application/usecases/auth/RegisterUserUseCase.js";
import { LoginUserUseCase } from "../../../application/usecases/auth/LoginUserUseCase.js";
import { RefreshTokenUseCase } from "../../../application/usecases/auth/RefreshTokenUseCase.js";
import { LogoutUseCase } from "../../../application/usecases/auth/LogoutUseCase.js";
import { TokenIssuer } from "../../../application/usecases/auth/TokenIssuer.js";
import { createRegisterEmailRoute } from "./registerEmailRoute.js";
import { createLoginEmailRoute } from "./loginEmailRoute.js";
import { createRefreshRoute } from "./refreshRoute.js";
import { createLogoutRoute } from "./logoutRoute.js";
import { createMeRoute } from "./meRoute.js";

export const createAuthRoutes = (
  userRepo:         IUserRepository,
  refreshTokenRepo: IRefreshTokenRepository,
  tokenService:     ITokenService,
  passwordHasher:   IPasswordHasher,
  requireAuth:      RequestHandler,
) => {
  const tokenIssuer     = new TokenIssuer(refreshTokenRepo, tokenService);
  const registerUseCase = new RegisterUserUseCase(userRepo, tokenIssuer, passwordHasher);
  const loginUseCase    = new LoginUserUseCase(userRepo, tokenIssuer, passwordHasher);
  const refreshUseCase  = new RefreshTokenUseCase(refreshTokenRepo, tokenService);
  const logoutUseCase   = new LogoutUseCase(refreshTokenRepo);

  const router = Router();
  router.use(createRegisterEmailRoute(registerUseCase));
  router.use(createLoginEmailRoute(loginUseCase));
  router.use(createRefreshRoute(refreshUseCase));
  router.use(createLogoutRoute(logoutUseCase));
  router.use(createMeRoute(requireAuth));
  return router;
};
