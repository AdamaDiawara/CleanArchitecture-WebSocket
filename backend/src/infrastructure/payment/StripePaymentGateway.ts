import Stripe from "stripe";
import type { IPaymentGateway, CreatePaymentIntentInput, PaymentWebhookEvent } from "../../application/ports/IPaymentGateway.js";
import type { PaymentIntentResult, SetupIntentResult, SavedPaymentMethod } from "../../application/payment/types.js";

/**
 * Implémentation Stripe de IPaymentGateway.
 * Toute dépendance à Stripe est confinée ici — l'application n'en sait rien.
 */
export class StripePaymentGateway implements IPaymentGateway {
  private readonly stripe: Stripe;

  constructor(
    secretKey: string,
    private readonly webhookSecret: string,
  ) {
    this.stripe = new Stripe(secretKey, { apiVersion: "2026-04-22.dahlia" });
  }

  async getOrCreateCustomer(userId: string, email: string): Promise<string> {
    const existing = await this.stripe.customers.search({
      query: `metadata["userId"]:"${userId}"`,
      limit: 1,
    });

    const existingCustomer = existing.data[0];
    if (existingCustomer) return existingCustomer.id;

    const customer = await this.stripe.customers.create({
      email,
      metadata: { userId },
    });

    return customer.id;
  }

  async createPaymentIntent(input: CreatePaymentIntentInput): Promise<PaymentIntentResult> {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount:   input.amount,
      currency: input.currency,
      metadata: input.metadata ?? {},
      automatic_payment_methods: { enabled: true },
      ...(input.stripeCustomerId && { customer: input.stripeCustomerId }),
    });

    return {
      paymentIntentId: paymentIntent.id,
      clientSecret:    paymentIntent.client_secret!,
      amount:          paymentIntent.amount,
      currency:        paymentIntent.currency,
    };
  }

  async createSetupIntent(stripeCustomerId: string): Promise<SetupIntentResult> {
    const setupIntent = await this.stripe.setupIntents.create({
      customer:               stripeCustomerId,
      payment_method_types:   ["card"],
    });

    return {
      setupIntentId: setupIntent.id,
      clientSecret:  setupIntent.client_secret!,
    };
  }

  async getPaymentMethodDetails(
    stripePaymentMethodId: string,
  ): Promise<Omit<SavedPaymentMethod, "id" | "userId" | "isDefault" | "createdAt">> {
    const paymentMethod = await this.stripe.paymentMethods.retrieve(stripePaymentMethodId);
    return {
      stripePaymentMethodId: paymentMethod.id,
      type:                  "card" as const,
      brand:                 paymentMethod.card?.brand    ?? "unknown",
      last4:                 paymentMethod.card?.last4    ?? "0000",
      expiryMonth:           paymentMethod.card?.exp_month ?? 0,
      expiryYear:            paymentMethod.card?.exp_year  ?? 0,
    };
  }

  async listSavedPaymentMethods(stripeCustomerId: string): Promise<SavedPaymentMethod[]> {
    const paymentMethods = await this.stripe.customers.listPaymentMethods(stripeCustomerId, {
      type: "card",
    });

    return paymentMethods.data.map((stripePaymentMethod) => ({
      id:                    stripePaymentMethod.id,
      userId:                stripePaymentMethod.metadata?.userId ?? "",
      stripePaymentMethodId: stripePaymentMethod.id,
      type:                  "card" as const,
      brand:                 stripePaymentMethod.card?.brand ?? "unknown",
      last4:                 stripePaymentMethod.card?.last4 ?? "0000",
      expiryMonth:           stripePaymentMethod.card?.exp_month ?? 0,
      expiryYear:            stripePaymentMethod.card?.exp_year  ?? 0,
      isDefault:             false,
      createdAt:             new Date(stripePaymentMethod.created * 1000),
    }));
  }

  async detachPaymentMethod(stripePaymentMethodId: string): Promise<void> {
    await this.stripe.paymentMethods.detach(stripePaymentMethodId);
  }

  async setDefaultPaymentMethod(stripeCustomerId: string, stripePaymentMethodId: string): Promise<void> {
    await this.stripe.customers.update(stripeCustomerId, {
      invoice_settings: { default_payment_method: stripePaymentMethodId },
    });
  }

  constructWebhookEvent(rawBody: string, signature: string): PaymentWebhookEvent {
    const event = this.stripe.webhooks.constructEvent(rawBody, signature, this.webhookSecret);
    return {
      type: event.type,
      data: { object: event.data.object as unknown as Record<string, unknown> },
    };
  }
}