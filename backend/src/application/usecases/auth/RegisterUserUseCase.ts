import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IUserRepository, CreateUserInput } from "../../ports/IUserRepository.js";
import type { IPasswordHasher } from "../../ports/IPasswordHasher.js";
import type { User, AuthTokens, RegisterInput } from "../../auth/types.js";
import { TokenIssuer } from "./TokenIssuer.js";
import { Email } from "../../../domain/value-objects/Email.js";
import {
  EmailAlreadyInUseError,
  PhoneAlreadyInUseError,
} from "../../../domain/errors/AuthErrors.js";

type RegisterOutput = { user: User; tokens: AuthTokens };
type RegisterError  = EmailAlreadyInUseError | PhoneAlreadyInUseError;

export class RegisterUserUseCase
  implements UseCase<RegisterInput, RegisterOutput, RegisterError>
{
  constructor(
    private readonly userRepo:     IUserRepository,
    private readonly tokenIssuer:  TokenIssuer,
    private readonly passwordHasher: IPasswordHasher,
  ) {}

  async execute(input: RegisterInput): Promise<Result<RegisterOutput, RegisterError>> {
    const email = Email.create(input.email);

    if (await this.userRepo.findByEmail(email.value)) return failure(new EmailAlreadyInUseError());
    if (await this.userRepo.findByPhone(input.phone))  return failure(new PhoneAlreadyInUseError());

    const passwordHash = await this.passwordHasher.hash(input.password);
    const user         = await this.userRepo.create(this.buildInput(input, passwordHash));
    const tokens       = await this.tokenIssuer.issue(user.id);

    return ok({ user, tokens });
  }

  private buildInput(input: RegisterInput, passwordHash: string): CreateUserInput {
    const base = { name: input.name, email: input.email, phone: input.phone, passwordHash };

    if (input.role === "RESTAURANT_OWNER") {
      return {
        ...base, role: "RESTAURANT_OWNER",
        restaurantProfile: {
          restaurantName:    input.restaurantName,
          restaurantAddress: input.restaurantAddress,
          cuisineType:       input.cuisineType,
        },
      };
    }
    if (input.role === "DRIVER") {
      return { ...base, role: "DRIVER", driverProfile: { transportType: input.transportType } };
    }
    return { ...base, role: "CLIENT" };
  }
}
