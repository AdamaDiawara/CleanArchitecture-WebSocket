import type { SavedPaymentMethod, CreatePaymentMethodInput } from "../payment/types.js";

export interface IPaymentMethodRepository {
  findAllByUserId(userId: string): Promise<SavedPaymentMethod[]>;
  findById(id: string): Promise<SavedPaymentMethod | null>;
  findByStripePaymentMethodId(stripePaymentMethodId: string): Promise<SavedPaymentMethod | null>;
  countByUserId(userId: string): Promise<number>;
  save(input: CreatePaymentMethodInput): Promise<SavedPaymentMethod>;
  remove(id: string): Promise<void>;
  setDefault(userId: string, paymentMethodId: string): Promise<SavedPaymentMethod>;
}