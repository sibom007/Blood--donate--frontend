import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignInInputData = z.infer<typeof SignInSchema>;

export const BLOOD_TYPES = [
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
  "O_POSITIVE",
  "O_NEGATIVE",
];


export const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters"),

  email: z.string().email("Invalid email address"),

  password: z
    .string()
    .min(7, "Password must be at least 7 characters")
    .regex(/[A-Z]/, "Must contain one uppercase letter")
    .regex(/[a-z]/, "Must contain one lowercase letter")
    .regex(/[^A-Za-z0-9]/, "Must contain one special character"),

  bloodType: z.string().min(1, "Blood type is required"),

  age: z.coerce
    .number()
    .min(18, "Minimum age is 18")
    .max(60, "Maximum age is 60"),

  phoneNumber: z
    .string()
    .regex(/^8801[3-9]\d{8}$/, "Enter valid Bangladesh number"),

  city: z.string().min(2, "City must be at least 2 characters"),
});

export type SignUpInputData = z.infer<typeof SignUpSchema>;

export enum Role {
  ADMIN = "ADMIN",
  VOLUNTEER = "VOLUNTEER",
  USER = "USER",
}

export type TJwtUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  isAvailable: boolean;
  tokenVersion: number;
};

export type AuthState = {
  user: TJwtUser | null;
  accessToken: string | null;
};

export type AuthPayload = {
  user: TJwtUser;
  accessToken: string;
};
