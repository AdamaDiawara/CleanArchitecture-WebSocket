import crypto from "node:crypto";
import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { UseCase } from "../../../shared/UseCase.js";
import { Order } from "../../../domain/entities/Order.js";
import { Distance } from "../../../domain/value-objects/Distance.js";
import type { Cart } from "../../../domain/entities/Cart.js";
import { EmptyCartError } from "../../../domain/errors/CartErrors.js";

export type PlaceOrderInput = {
  clientId:      string;
  cart:          Cart;
  clientLat:     number;
  clientLng:     number;
  restaurantLat: number;
  restaurantLng: number;
};

export type PlaceOrderOutput = {
  order:   Order;
  invoice: ReturnType<Order["toInvoice"]>;
};

/**
 * Use Case : passer une commande.
 * Règle métier : panier non vide, prix = plats + livraison (Haversine) + 5 % service.
 */
export class PlaceOrderUseCase
  implements UseCase<PlaceOrderInput, PlaceOrderOutput, EmptyCartError>
{
  async execute(input: PlaceOrderInput): Promise<Result<PlaceOrderOutput, EmptyCartError>> {
    if (input.cart.isEmpty) return failure(new EmptyCartError());

    const distance = Distance.fromCoordinates(
      input.clientLat,  input.clientLng,
      input.restaurantLat, input.restaurantLng,
    );

    const order = new Order({
      id:               crypto.randomUUID(),
      clientId:         input.clientId,
      restaurantId:     input.cart.restaurantId!,
      items:            [...input.cart.items],
      deliveryDistance: distance,
    });

    return ok({ order, invoice: order.toInvoice() });
  }
}
