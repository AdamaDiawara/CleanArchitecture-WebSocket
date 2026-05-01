import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import { API_BASE } from "./http";

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

let socket: Socket | null = null;

export const connectSocket = (accessToken: string): Socket => {
  if (socket?.connected) return socket;

  socket = io(API_BASE, {
    auth:        { token: accessToken },
    transports:  ["websocket"],
    reconnection: true,
    reconnectionDelay: 1000,
  });

  return socket;
};

export const disconnectSocket = (): void => {
  socket?.disconnect();
  socket = null;
};

export const getSocket = (): Socket | null => socket;
