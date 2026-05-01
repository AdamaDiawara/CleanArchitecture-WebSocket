import type { IDriverRepository } from "../../ports/IDriverRepository.js";
import type { IOrderRepository } from "../../ports/IOrderRepository.js";
import type { INotificationGateway } from "../../ports/INotificationGateway.js";
import { DriverNotFoundError } from "./ToggleDriverStatusUseCase.js";
import { DomainError } from "../../../domain/errors/DomainError.js";
import type { Result } from "../../../shared/Result.js";
import { ok, failure } from "../../../shared/Result.js";

class PickupError extends DomainError {
  readonly code = "PICKUP_FAILED";
  constructor(message: string) { super(message); }
}

export class PickupDeliveryUseCase {
  constructor(
    private readonly driverRepository:    IDriverRepository,
    private readonly orderRepository:     IOrderRepository,
    private readonly notificationGateway: INotificationGateway,
  ) {}

  async execute(userId: string, orderId: string): Promise<Result<void, DriverNotFoundError | PickupError>> {
    const driver = await this.driverRepository.findByUserId(userId);
    if (!driver) return failure(new DriverNotFoundError());

    const order  = await this.orderRepository.findById(orderId);
    const result = await this.driverRepository.pickupDelivery(orderId, driver.id);
    if (!result.success) return failure(new PickupError(result.message ?? "Erreur lors de la récupération"));

    if (order) {
      this.notificationGateway.notifyUser(order.clientUserId, {
        type:    "order_delivering",
        title:   "Commande récupérée 🚴",
        message: "Le livreur a récupéré votre commande et est en route vers vous !",
      });
      this.notificationGateway.broadcastToRoom(
        `user:${order.clientUserId}`,
        "order:update",
        { orderId, status: "delivering", hasDriver: true },
      );
    }

    return ok(undefined);
  }
}
