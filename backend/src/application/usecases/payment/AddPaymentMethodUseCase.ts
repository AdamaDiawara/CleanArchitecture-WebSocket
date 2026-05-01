import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IPaymentMethodRepository } from "../../ports/IPaymentMethodRepository.js";
import type { SavedPaymentMethod, PaymentMethodType } from "../../payment/types.js";
import { MAX_SAVED_PAYMENT_METHODS } from "../../payment/types.js";
import { MaxPaymentMethodsReachedError } from "../../../domain/errors/PaymentMethodErrors.js";

export type AddPaymentMethodInput = {
  userId: string;
  type: PaymentMethodType;
  label: string;
};

export class AddPaymentMethodUseCase
  implements UseCase<AddPaymentMethodInput, SavedPaymentMethod, MaxPaymentMethodsReachedError>
{
  constructor(private readonly paymentMethodRepository: IPaymentMethodRepository) {}

  async execute(input: AddPaymentMethodInput): Promise<Result<SavedPaymentMethod, MaxPaymentMethodsReachedError>> {
    const existingCount = await this.paymentMethodRepository.countByUserId(input.userId);

    if (existingCount >= MAX_SAVED_PAYMENT_METHODS) {
      return failure(new MaxPaymentMethodsReachedError());
    }

    const isFirstMethod = existingCount === 0;

    const paymentMethod = await this.paymentMethodRepository.save({
      userId:                input.userId,
      stripePaymentMethodId: "",
      type:                  input.type,
      brand:                 input.label,
      last4:                 "0000",
      expiryMonth:           0,
      expiryYear:            0,
      isDefault:             isFirstMethod,
    });

    return ok(paymentMethod);
  }
}