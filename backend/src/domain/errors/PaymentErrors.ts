import { DomainError } from "./DomainError.js";

export class PaymentIntentCreationError extends DomainError {
  readonly code = "PAYMENT_INTENT_CREATION_FAILED";
  constructor() { super("Failed to create payment intent"); }
}

export class SetupIntentCreationError extends DomainError {
  readonly code = "SETUP_INTENT_CREATION_FAILED";
  constructor() { super("Failed to create setup intent"); }
}

export class PaymentMethodNotFoundError extends DomainError {
  readonly code = "PAYMENT_METHOD_NOT_FOUND";
  constructor() { super("Payment method not found"); }
}

export class PaymentMethodNotOwnedError extends DomainError {
  readonly code = "PAYMENT_METHOD_NOT_OWNED";
  constructor() { super("This payment method does not belong to you"); }
}

export class MaxPaymentMethodsReachedError extends DomainError {
  readonly code = "MAX_PAYMENT_METHODS_REACHED";
  constructor() { super("Maximum of 5 payment methods allowed per account"); }
}
