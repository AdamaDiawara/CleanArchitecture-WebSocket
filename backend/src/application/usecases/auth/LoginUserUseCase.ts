import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IUserRepository } from "../../ports/IUserRepository.js";
import type { IPasswordHasher } from "../../ports/IPasswordHasher.js";
import type { User, AuthTokens, LoginInput } from "../../auth/types.js";
import { TokenIssuer } from "./TokenIssuer.js";
import { InvalidCredentialsError } from "../../../domain/errors/AuthErrors.js";

type LoginOutput = { user: User; tokens: AuthTokens };

export class LoginUserUseCase
  implements UseCase<LoginInput, LoginOutput, InvalidCredentialsError>
{
  constructor(
    private readonly userRepo:      IUserRepository,
    private readonly tokenIssuer:   TokenIssuer,
    private readonly passwordHasher: IPasswordHasher,
  ) {}

  async execute(input: LoginInput): Promise<Result<LoginOutput, InvalidCredentialsError>> {
    const credentials = await this.userRepo.findCredentialsByEmail(input.email);
    if (!credentials) return failure(new InvalidCredentialsError());

    const valid = await this.passwordHasher.compare(input.password, credentials.passwordHash);
    if (!valid) return failure(new InvalidCredentialsError());

    const tokens = await this.tokenIssuer.issue(credentials.user.id);
    return ok({ user: credentials.user, tokens });
  }
}
