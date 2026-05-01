import type { User } from "../types";

type UserApiDto = Omit<User, "photo_url" | "created_at"> & {
  photo_url?: string | null;
  photoUrl?: string | null;
  created_at?: string;
  createdAt?: string;
};

export const normalizeUser = (userDto: UserApiDto): User => ({
  ...userDto,
  photo_url: userDto.photo_url ?? userDto.photoUrl ?? null,
  created_at: userDto.created_at ?? userDto.createdAt ?? new Date().toISOString(),
});
