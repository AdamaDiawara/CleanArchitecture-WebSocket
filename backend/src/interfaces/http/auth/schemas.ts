import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Au moins 8 caractères")
  .max(128, "Maximum 128 caractères")
  .regex(/[A-Z]/, "Au moins une majuscule")
  .regex(/[a-z]/, "Au moins une minuscule")
  .regex(/[0-9]/, "Au moins un chiffre");

const baseRegister = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(30),
  password: passwordSchema,
});

export const registerSchema = z.discriminatedUnion("role", [
  baseRegister.extend({ role: z.literal("CLIENT") }),
  baseRegister.extend({
    role: z.literal("RESTAURANT_OWNER"),
    restaurantName: z.string().min(2).max(120),
    restaurantAddress: z.string().min(5).max(250),
    cuisineType: z.string().min(2).max(50),
  }),
  baseRegister.extend({
    role: z.literal("DRIVER"),
    transportType: z.enum(["bike", "scooter", "car"]),
  }),
]);

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const refreshSchema = z.object({
  refreshToken: z.string().min(10),
});
