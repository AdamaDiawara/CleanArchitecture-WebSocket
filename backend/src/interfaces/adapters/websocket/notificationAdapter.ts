import type { Server as SocketIOServer, Socket } from "socket.io";
import type { ITokenService } from "../../../application/ports/ITokenService.js";
import type { IUserRepository } from "../../../application/ports/IUserRepository.js";

const DRIVERS_ONLINE_ROOM = "drivers:online";
const ADMINS_ROOM         = "admins";

/**
 * Adaptateur WebSocket — gère l'authentification JWT et l'affectation aux rooms.
 * - Chaque client authentifié rejoint la room "user:<userId>"
 * - Les admins rejoignent la room "admins" automatiquement
 * - Les livreurs en ligne rejoignent la room "drivers:online"
 */
export function setupNotificationAdapter(
  io: SocketIOServer,
  tokenService: ITokenService,
  userRepository?: IUserRepository,
): void {
  io.use((socket: Socket, next) => {
    const token = socket.handshake.auth.token as string | undefined;
    if (!token) { next(new Error("Authentification requise")); return; }

    try {
      const { userId } = tokenService.verifyAccessToken(token);
      socket.data.userId = userId;
      next();
    } catch {
      next(new Error("Token invalide ou expiré"));
    }
  });

  io.on("connection", async (socket: Socket) => {
    const userId = socket.data.userId as string;
    socket.join(`user:${userId}`);

    if (userRepository) {
      const user = await userRepository.findById(userId);
      if (user?.role === "ADMIN") {
        socket.join(ADMINS_ROOM);
      }
    }

    socket.on("driver:online",  () => socket.join(DRIVERS_ONLINE_ROOM));
    socket.on("driver:offline", () => socket.leave(DRIVERS_ONLINE_ROOM));

    socket.on("disconnect", () => {
      socket.leave(`user:${userId}`);
      socket.leave(DRIVERS_ONLINE_ROOM);
      socket.leave(ADMINS_ROOM);
    });
  });
}
