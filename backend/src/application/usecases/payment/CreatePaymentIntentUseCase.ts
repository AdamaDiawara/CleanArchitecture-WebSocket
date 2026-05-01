import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IPaymentGateway } from "../../ports/IPaymentGateway.js";
import type { PaymentIntentResult } from "../../payment/types.js";
import { PaymentIntentCreationError } from "../../../domain/errors/PaymentErrors.js";

export type CreatePaymentIntentInput = {
  userId: string;
  userEmail: string;
  stripeCustomerId: string | null;
  amount: number;
  currency: string;
  orderId?: string;
};

export class CreatePaymentIntentUseCase
  implements UseCase<CreatePaymentIntentInput, PaymentIntentResult, PaymentIntentCreationError>
{
  constructor(private readonly paymentGateway: IPaymentGateway) {}

  async execute(input: CreatePaymentIntentInput): Promise<Result<PaymentIntentResult, PaymentIntentCreationError>> {
    try {
      const stripeCustomerId = input.stripeCustomerId
        ?? await this.paymentGateway.getOrCreateCustomer(input.userId, input.userEmail);

      const paymentIntent = await this.paymentGateway.createPaymentIntent({
        amount:           input.amount,
        currency:         input.currency,
        stripeCustomerId,
        ...(input.orderId ? { metadata: { orderId: input.orderId } } : {}),
      });

      return ok(paymentIntent);
    } catch {
      return failure(new PaymentIntentCreationError());
    }
  }
}