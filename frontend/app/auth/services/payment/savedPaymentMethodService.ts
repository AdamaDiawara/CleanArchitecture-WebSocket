import { callAuthJson } from "../http";

export type SavedPaymentMethod = {
  id:                    string;
  userId:                string;
  stripePaymentMethodId: string;
  type:                  "card" | "paypal";
  brand:                 string;
  last4:                 string;
  expiryMonth:           number;
  expiryYear:            number;
  isDefault:             boolean;
  createdAt:             string;
};

export const getSavedPaymentMethods = (accessToken: string) =>
  callAuthJson<SavedPaymentMethod[]>("/payment/methods", accessToken);

export const confirmAndSavePaymentMethod = (
  stripePaymentMethodId: string,
  accessToken: string,
) =>
  callAuthJson<SavedPaymentMethod>("/payment/methods/confirm", accessToken, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ stripePaymentMethodId }),
  });

export const removePaymentMethod = (paymentMethodId: string, accessToken: string) =>
  callAuthJson<void>(`/payment/methods/${paymentMethodId}`, accessToken, { method: "DELETE" });