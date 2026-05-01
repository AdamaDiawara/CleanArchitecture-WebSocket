import { loadStripe } from "@stripe/stripe-js";
import type { Stripe } from "@stripe/stripe-js";

let stripeInstance: Promise<Stripe | null> | null = null;

/**
 * Singleton — loadStripe est coûteux, on ne l'appelle qu'une fois.
 * La clé publiable ne contient aucun secret — elle peut être exposée au client.
 */
export const getStripe = (): Promise<Stripe | null> => {
  if (!stripeInstance) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
    stripeInstance = loadStripe(publishableKey);
  }
  return stripeInstance;
};