import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import type { IPaymentGateway } from "../../ports/IPaymentGateway.js";
import type { IPaymentMethodRepository } from "../../ports/IPaymentMethodRepository.js";
import {
  PaymentMethodNotFoundError,
  PaymentMethodNotOwnedError,
} from "../../../domain/errors/PaymentErrors.js";

export type RemovePaymentMethodInput = {
  userId: string;
  paymentMethodId: string;
};

type RemovePaymentMethodError = PaymentMethodNotFoundError | PaymentMethodNotOwnedError;

export class RemovePaymentMethodUseCase
  implements UseCase<RemovePaymentMethodInput, void, RemovePaymentMethodError>
{
  constructor(
    private readonly paymentMethodRepository: IPaymentMethodRepository,
    private readonly paymentGateway:          IPaymentGateway,
  ) {}

  async execute(input: RemovePaymentMethodInput): Promise<Result<void, RemovePaymentMethodError>> {
    const paymentMethod = await this.paymentMethodRepository.findById(input.paymentMethodId);

    if (!paymentMethod) return failure(new PaymentMethodNotFoundError());
    if (paymentMethod.userId !== input.userId) return failure(new PaymentMethodNotOwnedError());

    await this.paymentGateway.detachPaymentMethod(paymentMethod.stripePaymentMethodId);
    await this.paymentMethodRepository.remove(input.paymentMethodId);

    if (paymentMethod.isDefault) {
      const remaining = await this.paymentMethodRepository.findAllByUserId(input.userId);
      const nextDefault = remaining[0];
      if (nextDefault) {
        await this.paymentMethodRepository.setDefault(input.userId, nextDefault.id);
      }
    }

    return ok(undefined);
  }
}