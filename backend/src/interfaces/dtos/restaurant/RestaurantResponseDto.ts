import type { OpeningHoursMap } from "../../../domain/value-objects/OpeningHours.js";

export type RestaurantResponseDto = {
  id:           string;
  name:         string;
  description:  string | null;
  logoUrl:      string | null;
  address:      string;
  cuisineType:  string;
  prepTimeMin:  number;
  deliveryFee:  number;
  isActive:     boolean;
  ratingAvg:    number | null;
  openingHours: OpeningHoursMap;
};
