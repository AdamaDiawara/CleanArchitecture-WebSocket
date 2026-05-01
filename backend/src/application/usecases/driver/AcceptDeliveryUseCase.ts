import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";
import type { IDriverRepository } from "../../ports/IDriverRepository.js";
import type { IOrderRepository } from "../../ports/IOrderRepository.js";
import type { INotificationGateway } from "../../ports/INotificationGateway.js";
import { DriverNotFoundError } from "./ToggleDriverStatusUseCase.js";
import { DomainError } from "../../../domain/errors/DomainError.js";

export class DeliveryAlreadyTakenError extends DomainError {
  readonly code = "DELIVERY_ALREADY_TAKEN";
  constructor() { super("Cette commande a déjà été prise en charge par un autre livreur."); }
}

export class AcceptDeliveryUseCase {
  constructor(
    private readonly driverRepository:    IDriverRepository,
    private readonly orderRepository:     IOrderRepository,
    private readonly notificationGateway: INotificationGateway,
  ) {}

  async execute(
    userId:  string,
    orderId: string,
  ): Promise<Result<void, DriverNotFoundError | DeliveryAlreadyTakenError>> {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());

    const order  = await this.orderRepository.findById(orderId);
    const result = await this.driverRepository.acceptDelivery(orderId, driver.id);

    if (!result.accepted) return failure(new DeliveryAlreadyTakenError());

    if (order) {
      /* ── Notification + temps réel pour le CLIENT ── */
      this.notificationGateway.notifyUser(order.clientUserId, {
        type:    "order_driver_assigned",
        title:   "Livreur en route 🛵",
        message: "Un livreur a accepté votre commande et se dirige vers le restaurant.",
      });
      this.notificationGateway.broadcastToRoom(`user:${order.clientUserId}`, "order:update", {
        orderId, status: order.status, hasDriver: true,
      });

      /* ── Notification + temps réel pour le RESTAURANT ── */
      this.notificationGateway.broadcastToRoom(`user:${order.restaurantOwnerId}`, "order:restaurant_update", {
        orderId, driverName: driver.name,
      });
    }

    return ok(undefined);
  }
}
