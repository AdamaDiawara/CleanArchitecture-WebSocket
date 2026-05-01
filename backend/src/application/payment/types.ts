export type PaymentMethodType = "card" | "paypal";

export type SavedPaymentMethod = {
  id: string;
  userId: string;
  stripePaymentMethodId: string;
  type: PaymentMethodType;
  brand: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
  createdAt: Date;
};

export type CreatePaymentMethodInput = {
  userId: string;
  stripePaymentMethodId: string;
  type: PaymentMethodType;
  brand: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
};

export type PaymentIntentResult = {
  paymentIntentId: string;
  clientSecret: string;
  amount: number;
  currency: string;
};

export type SetupIntentResult = {
  setupIntentId: string;
  clientSecret: string;
};

export const MAX_SAVED_PAYMENT_METHODS = 5;