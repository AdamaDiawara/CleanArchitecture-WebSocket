import type { SavedPaymentMethod, PaymentIntentResult, SetupIntentResult } from "../../application/payment/types.js";
import type { SavedPaymentMethodResponseDto } from "../dtos/payment/SavedPaymentMethodResponseDto.js";
import type { PaymentIntentResponseDto, SetupIntentResponseDto } from "../dtos/payment/PaymentIntentResponseDto.js";

export class PaymentPresenter {
  static toPaymentMethodDto(paymentMethod: SavedPaymentMethod): SavedPaymentMethodResponseDto {
    return {
      id:          paymentMethod.id,
      type:        paymentMethod.type,
      brand:       paymentMethod.brand,
      last4:       paymentMethod.last4,
      expiryMonth: paymentMethod.expiryMonth,
      expiryYear:  paymentMethod.expiryYear,
      isDefault:   paymentMethod.isDefault,
      createdAt:   paymentMethod.createdAt instanceof Date
        ? paymentMethod.createdAt.toISOString()
        : String(paymentMethod.createdAt),
    };
  }

  static toPaymentMethodDtoList(paymentMethods: SavedPaymentMethod[]): SavedPaymentMethodResponseDto[] {
    return paymentMethods.map((paymentMethod) => PaymentPresenter.toPaymentMethodDto(paymentMethod));
  }

  static toPaymentIntentDto(result: PaymentIntentResult): PaymentIntentResponseDto {
    return {
      paymentIntentId: result.paymentIntentId,
      clientSecret:    result.clientSecret,
      amount:          result.amount,
      currency:        result.currency,
    };
  }

  static toSetupIntentDto(result: SetupIntentResult): SetupIntentResponseDto {
    return {
      setupIntentId: result.setupIntentId,
      clientSecret:  result.clientSecret,
    };
  }
}