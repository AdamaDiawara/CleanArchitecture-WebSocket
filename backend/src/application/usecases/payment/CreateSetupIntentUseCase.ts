import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IPaymentGateway } from "../../ports/IPaymentGateway.js";
import type { SetupIntentResult } from "../../payment/types.js";
import { SetupIntentCreationError } from "../../../domain/errors/PaymentErrors.js";

export type CreateSetupIntentInput = {
  userId: string;
  userEmail: string;
  stripeCustomerId: string | null;
};

export class CreateSetupIntentUseCase
  implements UseCase<CreateSetupIntentInput, SetupIntentResult, SetupIntentCreationError>
{
  constructor(private readonly paymentGateway: IPaymentGateway) {}

  async execute(input: CreateSetupIntentInput): Promise<Result<SetupIntentResult, SetupIntentCreationError>> {
    try {
      const stripeCustomerId = input.stripeCustomerId
        ?? await this.paymentGateway.getOrCreateCustomer(input.userId, input.userEmail);

      const setupIntent = await this.paymentGateway.createSetupIntent(stripeCustomerId);

      return ok(setupIntent);
    } catch {
      return failure(new SetupIntentCreationError());
    }
  }
}