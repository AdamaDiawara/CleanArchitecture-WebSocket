import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IPaymentGateway } from "../../ports/IPaymentGateway.js";
import type { IPaymentMethodRepository } from "../../ports/IPaymentMethodRepository.js";
import type { SavedPaymentMethod } from "../../payment/types.js";
import { MAX_SAVED_PAYMENT_METHODS } from "../../payment/types.js";
import { MaxPaymentMethodsReachedError } from "../../../domain/errors/PaymentErrors.js";

export type ConfirmPaymentMethodInput = {
  userId:                string;
  stripePaymentMethodId: string;
};

export class ConfirmPaymentMethodUseCase
  implements UseCase<ConfirmPaymentMethodInput, SavedPaymentMethod, MaxPaymentMethodsReachedError>
{
  constructor(
    private readonly paymentMethodRepository: IPaymentMethodRepository,
    private readonly paymentGateway:          IPaymentGateway,
  ) {}

  async execute(input: ConfirmPaymentMethodInput): Promise<Result<SavedPaymentMethod, MaxPaymentMethodsReachedError>> {
    const existingCount = await this.paymentMethodRepository.countByUserId(input.userId);

    if (existingCount >= MAX_SAVED_PAYMENT_METHODS) {
      return failure(new MaxPaymentMethodsReachedError());
    }

    const alreadySaved = await this.paymentMethodRepository.findByStripePaymentMethodId(
      input.stripePaymentMethodId,
    );
    if (alreadySaved) return ok(alreadySaved);

    const details = await this.paymentGateway.getPaymentMethodDetails(input.stripePaymentMethodId);

    const savedPaymentMethod = await this.paymentMethodRepository.save({
      userId:                input.userId,
      stripePaymentMethodId: details.stripePaymentMethodId,
      type:                  details.type,
      brand:                 details.brand,
      last4:                 details.last4,
      expiryMonth:           details.expiryMonth,
      expiryYear:            details.expiryYear,
      isDefault:             existingCount === 0,
    });

    return ok(savedPaymentMethod);
  }
}
