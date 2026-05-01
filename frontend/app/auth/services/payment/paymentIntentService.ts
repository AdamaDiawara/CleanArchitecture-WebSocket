import { callAuthJson } from "../http";

export type CreatePaymentIntentInput = {
  amount:   number;
  currency?: string;
  orderId?: string;
};

export type PaymentIntentResult = {
  paymentIntentId: string;
  clientSecret:    string;
  amount:          number;
  currency:        string;
};

export type SetupIntentResult = {
  setupIntentId: string;
  clientSecret:  string;
};

/**
 * Demande au backend de créer un PaymentIntent Stripe.
 * Le clientSecret retourné est passé à Stripe.js pour compléter le paiement côté client.
 */
export const createPaymentIntent = (
  input: CreatePaymentIntentInput,
  accessToken: string,
) =>
  callAuthJson<PaymentIntentResult>("/payment/create-intent", accessToken, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ currency: "eur", ...input }),
  });

/**
 * Demande au backend de créer un SetupIntent Stripe.
 * Le clientSecret retourné est passé à Stripe.js pour enregistrer une carte sans débit immédiat.
 */
export const createSetupIntent = (accessToken: string) =>
  callAuthJson<SetupIntentResult>("/payment/setup-intent", accessToken, { method: "POST" });
