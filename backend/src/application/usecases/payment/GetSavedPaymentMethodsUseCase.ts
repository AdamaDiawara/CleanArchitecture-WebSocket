import type { SavedPaymentMethod } from "../../payment/types.js";
import type { IPaymentMethodRepository } from "../../ports/IPaymentMethodRepository.js";

export class GetSavedPaymentMethodsUseCase {
  constructor(private readonly paymentMethodRepository: IPaymentMethodRepository) {}

  async execute(userId: string): Promise<SavedPaymentMethod[]> {
    return this.paymentMethodRepository.findAllByUserId(userId);
  }
}