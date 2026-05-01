import type {
  IUserRepository,
  CreateUserInput,
  UpdateUserInput,
  UserCredentials,
} from "../../../application/ports/IUserRepository.js";
import type { User } from "../../../application/auth/types.js";
import { InMemoryRepository } from "./InMemoryRepository.js";
import crypto from "node:crypto";

type StoredUser = User & { passwordHash: string };

/**
 * Adaptateur in-memory — hérite de InMemoryRepository<StoredUser>.
 * Implémente IUserRepository : aucune dépendance à Prisma ou PostgreSQL.
 */
export class InMemoryUserRepository
  extends InMemoryRepository<StoredUser>
  implements IUserRepository
{
  async findById(id: string): Promise<User | null> {
    const stored = this.getById(id);
    return stored ? this.toUser(stored) : null;
  }

  async findByEmail(email: string): Promise<Pick<User, "id"> | null> {
    const found = this.findWhere((storedUser) => storedUser.email === email);
    return found ? { id: found.id } : null;
  }

  async findByPhone(phone: string): Promise<Pick<User, "id"> | null> {
    const found = this.findWhere((storedUser) => storedUser.phone === phone);
    return found ? { id: found.id } : null;
  }

  async findCredentialsByEmail(email: string): Promise<UserCredentials | null> {
    const found = this.findWhere((storedUser) => storedUser.email === email);
    if (!found) return null;
    return { user: this.toUser(found), passwordHash: found.passwordHash };
  }

  async create(input: CreateUserInput): Promise<User> {
    const stored: StoredUser = {
      id:           crypto.randomUUID(),
      name:         input.name,
      email:        input.email,
      phone:        input.phone,
      role:         input.role,
      photo_url:          null,
      created_at:         new Date(),
      preferences:        null,
      allergies:          null,
      stripe_customer_id: null,
      passwordHash:       input.passwordHash,
    };
    this.save(stored);
    return this.toUser(stored);
  }

  async update(id: string, input: UpdateUserInput): Promise<User> {
    const existing = this.getById(id);
    if (!existing) throw new Error("User not found");
    const updated = this.save({ ...existing, ...input });
    return this.toUser(updated);
  }

  private toUser(stored: StoredUser): User {
    const { passwordHash: _, ...user } = stored;
    return user;
  }
}
