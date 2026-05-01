import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IUserRepository } from "../../ports/IUserRepository.js";
import type { ITokenService } from "../../ports/ITokenService.js";
import type { User } from "../../auth/types.js";
import { InvalidTokenError, UserNotFoundError } from "../../../domain/errors/AuthErrors.js";

type GetCurrentUserError = InvalidTokenError | UserNotFoundError;

export class GetCurrentUserUseCase
  implements UseCase<string, User, GetCurrentUserError>
{
  constructor(
    private readonly userRepo:     IUserRepository,
    private readonly tokenService: ITokenService,
  ) {}

  async execute(accessToken: string): Promise<Result<User, GetCurrentUserError>> {
    let userId: string;
    try {
      ({ userId } = this.tokenService.verifyAccessToken(accessToken));
    } catch {
      return failure(new InvalidTokenError());
    }

    const user = await this.userRepo.findById(userId);
    if (!user) return failure(new UserNotFoundError());

    return ok(user);
  }
}
