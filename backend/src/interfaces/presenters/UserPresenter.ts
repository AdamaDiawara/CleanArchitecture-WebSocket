import type { User } from "../../application/auth/types.js";
import type { UserResponseDto } from "../dtos/user/UserResponseDto.js";

export class UserPresenter {
  static toDto(user: User): UserResponseDto {
    return {
      id:          user.id,
      name:        user.name,
      email:       user.email,
      phone:       user.phone,
      role:        user.role,
      photoUrl:    user.photo_url,
      preferences: user.preferences ?? null,
      allergies:   user.allergies   ?? null,
      createdAt:   user.created_at instanceof Date
        ? user.created_at.toISOString()
        : String(user.created_at),
    };
  }

  static toDtoList(users: User[]): UserResponseDto[] {
    return users.map((user) => UserPresenter.toDto(user));
  }
}