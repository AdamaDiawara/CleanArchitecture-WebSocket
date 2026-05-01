import type { Server as SocketIOServer } from "socket.io";
import type { INotificationGateway, NotificationPayload } from "../../../application/ports/INotificationGateway.js";

/**
 * Implémentation Socket.io de INotificationGateway.
 * Toute dépendance à Socket.io est confinée ici.
 * Chaque utilisateur rejoint la room "user:<userId>" à la connexion.
 * Les livreurs en ligne rejoignent la room "drivers:online".
 */
export class SocketIOGateway implements INotificationGateway {
  constructor(private readonly io: SocketIOServer) {}

  notifyUser(userId: string, payload: NotificationPayload): void {
    this.io.to(`user:${userId}`).emit("notification", payload);
  }

  broadcastToRoom(room: string, event: string, data: unknown): void {
    this.io.to(room).emit(event, data);
  }
}
