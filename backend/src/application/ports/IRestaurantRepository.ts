import type { Restaurant, CreateRestaurantInput, UpdateRestaurantProfileInput } from "../restaurant/types.js";
import type { OpeningHoursMap } from "../../domain/value-objects/OpeningHours.js";

export type RestaurantStats = {
  total:  number;
  active: number;
};

export interface IRestaurantRepository {
  getStats(): Promise<RestaurantStats>;
  findAllActive(): Promise<Restaurant[]>;
  findAllByOwnerId(ownerId: string): Promise<Restaurant[]>;
  findById(id: string): Promise<Restaurant | null>;
  create(input: CreateRestaurantInput): Promise<Restaurant>;
  updateProfile(id: string, input: UpdateRestaurantProfileInput): Promise<Restaurant>;
  updateOpeningHours(id: string, openingHours: OpeningHoursMap): Promise<Restaurant>;
  updateStatus(id: string, isActive: boolean): Promise<Restaurant>;
  updateLogoUrl(id: string, logoUrl: string): Promise<Restaurant>;
}
