import { z } from "zod";

export const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

/* ENUM */
export enum bloodGroup {
  A_POS = "A_POS",
  B_POS = "B_POS",
  A_NEG = "A_NEG",
  B_NEG = "B_NEG",
  AB_POS = "AB_POS",
  AB_NEG = "AB_NEG",
  O_POS = "O_POS",
  O_NEG = "O_NEG",
}

/* ZOD SCHEMA */
export const bloodGroupSchema = z.nativeEnum(bloodGroup, {
  error: () => ({
    message: "Invalid blood group",
  }),
});

export const bloodGroupLabels: Record<bloodGroup, string> = {
  A_POS: "A+",
  B_POS: "B+",
  A_NEG: "A-",
  B_NEG: "B-",
  AB_POS: "AB+",
  AB_NEG: "AB-",
  O_POS: "O+",
  O_NEG: "O-",
};

/* TYPE */
export type BloodGroupType = z.infer<typeof bloodGroupSchema>;

export type SignInFormValues = {
  email: string;
  password: string;
};

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z.object({
  name: z
    .string("Name is required")
    .min(1, "Name cannot be empty")
    .max(100, "Name is to long"),

  email: z.string("Email is required").email("Invalid email"),

  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),

  bloodType: bloodGroupSchema,

  location: z.string("Location is required"),

  bio: z.string("Bio is required"),

  age: z.string("Age is required"),

  bloodDonner: z.enum(["YES", "NO"]),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export type TJwtUser = {
  id: string;
  name: string;
  email: string;
  role: typeof Role;
};

export type TinitialState = {
  user: null | TJwtUser;
  accessToken: null | string;
};
