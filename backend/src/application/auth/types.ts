export type UserRole = "CLIENT" | "RESTAURANT_OWNER" | "DRIVER" | "ADMIN";

export type DietType =
  | "none"
  | "vegetarian"
  | "vegan"
  | "gluten_free"
  | "halal"
  | "kosher";

export type AllergyType =
  | "gluten"
  | "lactose"
  | "peanuts"
  | "eggs"
  | "shellfish"
  | "tree_nuts"
  | "soy"
  | "fish";

export type CuisineType =
  | "french"
  | "italian"
  | "asian"
  | "japanese"
  | "indian"
  | "mexican"
  | "american"
  | "mediterranean";

export type UserDietPreferences = {
  diet: DietType;
  cuisines: CuisineType[];
};

export type User = {
  id:                 string;
  name:               string;
  email:              string;
  phone:              string;
  role:               UserRole;
  photo_url:          string | null;
  created_at:         Date;
  preferences:        UserDietPreferences | null;
  allergies:          AllergyType[] | null;
  stripe_customer_id: string | null;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

type BaseRegisterInput = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterInput =
  | (BaseRegisterInput & { role: "CLIENT" })
  | (BaseRegisterInput & {
      role: "RESTAURANT_OWNER";
      restaurantName: string;
      restaurantAddress: string;
      cuisineType: string;
    })
  | (BaseRegisterInput & {
      role: "DRIVER";
      transportType: "bike" | "scooter" | "car";
    });

export type LoginInput = {
  email: string;
  password: string;
};
