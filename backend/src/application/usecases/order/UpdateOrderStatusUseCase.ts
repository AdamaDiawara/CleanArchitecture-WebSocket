import type { IOrderRepository } from "../../ports/IOrderRepository.js";
import type { IRestaurantRepository } from "../../ports/IRestaurantRepository.js";
import type { INotificationGateway } from "../../ports/INotificationGateway.js";

const ALLOWED_TRANSITIONS: Record<string, string[]> = {
  created:   ["confirmed", "cancelled"],
  confirmed: ["prepared", "cancelled"],
  prepared:  ["delivered"],
};

const STATUS_NOTIFICATIONS: Record<string, { title: string; message: string; type: string }> = {
  confirmed: {
    type:    "order_confirmed",
    title:   "Commande acceptée ! 🎉",
    message: "Le restaurant a accepté votre commande et commence la préparation.",
  },
  prepared: {
    type:    "order_prepared",
    title:   "Commande prête ! 🍽️",
    message: "Votre commande est prête, un livreur va la prendre en charge.",
  },
  cancelled: {
    type:    "order_cancelled",
    title:   "Commande annulée ❌",
    message: "Votre commande a été annulée par le restaurant.",
  },
};

export class UpdateOrderStatusUseCase {
  constructor(
    private readonly orderRepository:      IOrderRepository,
    private readonly restaurantRepository: IRestaurantRepository,
    private readonly notificationGateway:  INotificationGateway,
  ) {}

  async execute(
    orderId:   string,
    newStatus: string,
    userId:    string,
  ): Promise<{ success: boolean; message?: string }> {
    const order = await this.orderRepository.findById(orderId);
    if (!order) return { success: false, message: "Commande introuvable" };

    const restaurants = await this.restaurantRepository.findAllByOwnerId(userId);
    const ownsRestaurant = restaurants.some((r) => r.id === order.restaurantId);
    if (!ownsRestaurant) return { success: false, message: "Non autorisé" };

    const allowed = ALLOWED_TRANSITIONS[order.status] ?? [];
    if (!allowed.includes(newStatus)) {
      return { success: false, message: `Transition invalide : ${order.status} → ${newStatus}` };
    }

    await this.orderRepository.updateStatus(orderId, newStatus);

    /* ── Notification + mise à jour temps réel ── */
    const notif = STATUS_NOTIFICATIONS[newStatus];
    if (notif) {
      this.notificationGateway.notifyUser(order.clientUserId, {
        type:    notif.type as any,
        title:   notif.title,
        message: notif.message,
      });
    }
    this.notificationGateway.broadcastToRoom(
      `user:${order.clientUserId}`,
      "order:update",
      { orderId, status: newStatus, hasDriver: false },
    );

    return { success: true };
  }
}
