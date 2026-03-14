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
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  bloodType: z.string(),
  age: z.coerce.number().min(18),
  phoneNumber: z.string().min(11),
  city: z.string().min(2),
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
