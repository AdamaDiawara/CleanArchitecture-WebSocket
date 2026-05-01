export type NotificationType =
  | "document_validated"
  | "document_rejected"
  | "account_activated"
  | "order_confirmed"
  | "order_prepared"
  | "order_driver_assigned"
  | "order_delivering"
  | "order_delivered"
  | "order_cancelled";

export type NotificationPayload = {
  type:    NotificationType;
  title:   string;
  message: string;
};

/**
 * Port — abstraction des notifications temps réel.
 * L'application dépend de cette interface, pas de Socket.io.
 */
export interface INotificationGateway {
  notifyUser(userId: string, payload: NotificationPayload): void;
  broadcastToRoom(room: string, event: string, data: unknown): void;
}
