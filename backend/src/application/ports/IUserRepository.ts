import type { User, UserDietPreferences, AllergyType } from "../auth/types.js";

export type CreateUserInput = {
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: "CLIENT" | "RESTAURANT_OWNER" | "DRIVER";
  restaurantProfile?: {
    restaurantName: string;
    restaurantAddress: string;
    cuisineType: string;
  };
  driverProfile?: {
    transportType: "bike" | "scooter" | "car";
  };
};

export type UserCredentials = {
  user: User;
  passwordHash: string;
};

export type UpdateUserInput = {
  name?: string;
  phone?: string;
  photo_url?: string;
  preferences?: UserDietPreferences;
  allergies?: AllergyType[];
};

export type UserRoleStats = {
  total:            number;
  clients:          number;
  restaurantOwners: number;
  drivers:          number;
};

export interface IUserRepository {
  getStatsByRole(): Promise<UserRoleStats>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<Pick<User, "id"> | null>;
  findByPhone(phone: string): Promise<Pick<User, "id"> | null>;
  findCredentialsByEmail(email: string): Promise<UserCredentials | null>;
  create(input: CreateUserInput): Promise<User>;
  update(id: string, input: UpdateUserInput): Promise<User>;
}
