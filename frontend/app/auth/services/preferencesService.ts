import { callAuthJson } from "./http";
import type { AllergyType, CuisineType, DietType, User, UserPreferences } from "../types";

export const DIET_LABELS: Record<DietType, string> = {
  none:        "Aucun régime particulier",
  vegetarian:  "Végétarien",
  vegan:       "Végétalien (vegan)",
  gluten_free: "Sans gluten",
  halal:       "Halal",
  kosher:      "Casher",
};

export const ALLERGY_LABELS: Record<AllergyType, string> = {
  gluten:    "Gluten",
  lactose:   "Lactose",
  peanuts:   "Arachides",
  eggs:      "Œufs",
  shellfish: "Crustacés et fruits de mer",
  tree_nuts: "Fruits à coque",
  soy:       "Soja",
  fish:      "Poisson",
};

export const CUISINE_LABELS: Record<CuisineType, string> = {
  french:        "Française",
  italian:       "Italienne",
  asian:         "Asiatique",
  japanese:      "Japonaise",
  indian:        "Indienne",
  mexican:       "Mexicaine",
  american:      "Américaine",
  mediterranean: "Méditerranéenne",
};

export const preferencesFromUser = (user: User | null): UserPreferences => ({
  diet:      user?.preferences?.diet     ?? "none",
  cuisines:  user?.preferences?.cuisines ?? [],
  allergies: user?.allergies             ?? [],
});

export const updatePreferences = (preferences: UserPreferences, accessToken: string) =>
  callAuthJson<User>("/users/me/preferences", accessToken, {
    method:  "PATCH",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(preferences),
  });