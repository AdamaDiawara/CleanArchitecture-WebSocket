import type { OpeningHoursMap } from "../../domain/value-objects/OpeningHours.js";

export type Restaurant = {
  id:           string;
  ownerId:      string;
  name:         string;
  description:  string | null;
  logoUrl:      string | null;
  address:      string;
  lat:          number;
  lng:          number;
  openingHours: OpeningHoursMap;
  isActive:     boolean;
  ratingAvg:    number | null;
  cuisineType:  string;
  prepTimeMin:  number;
  deliveryFee:  number;
};

export type CreateRestaurantInput = {
  ownerId:     string;
  name:        string;
  description?: string;
  address:     string;
  lat:         number;
  lng:         number;
  cuisineType: string;
  prepTimeMin: number;
  deliveryFee: number;
};

export type UpdateRestaurantProfileInput = {
  name?:        string;
  description?: string;
  address?:     string;
  cuisineType?: string;
  prepTimeMin?: number;
  deliveryFee?: number;
};
