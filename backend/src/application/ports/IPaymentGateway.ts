import type { PaymentIntentResult, SetupIntentResult, SavedPaymentMethod } from "../payment/types.js";

export type CreatePaymentIntentInput = {
  amount: number;
  currency: string;
  stripeCustomerId?: string;
  metadata?: Record<string, string>;
};

export type PaymentWebhookEvent = {
  type: string;
  data: { object: Record<string, unknown> };
};

/**
 * Port — abstraction du gateway de paiement.
 * L'application dépend de cette interface, pas de Stripe.
 * Si Stripe change ou si on migre vers un autre provider,
 * seule l'implémentation dans infrastructure/payment/ change.
 */
export interface IPaymentGateway {
  getOrCreateCustomer(userId: string, email: string): Promise<string>;
  createPaymentIntent(input: CreatePaymentIntentInput): Promise<PaymentIntentResult>;
  createSetupIntent(stripeCustomerId: string): Promise<SetupIntentResult>;
  getPaymentMethodDetails(stripePaymentMethodId: string): Promise<Omit<SavedPaymentMethod, "id" | "userId" | "isDefault" | "createdAt">>;
  listSavedPaymentMethods(stripeCustomerId: string): Promise<SavedPaymentMethod[]>;
  detachPaymentMethod(stripePaymentMethodId: string): Promise<void>;
  setDefaultPaymentMethod(stripeCustomerId: string, stripePaymentMethodId: string): Promise<void>;
  constructWebhookEvent(rawBody: string, signature: string): PaymentWebhookEvent;
}