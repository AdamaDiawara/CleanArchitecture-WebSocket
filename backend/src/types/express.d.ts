import type { User } from "../application/auth/types.js";

declare global {
  namespace Express {
    interface Request {
      user?:    User;
      rawBody?: string;
    }
  }
}

export type {};