"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useSignUpMutation } from "@/Redux/api/auth-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

/* ------------------ DATA ------------------ */

export const BLOOD_TYPES = [
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "O_POSITIVE",
  "O_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
];

/* ------------------ STRICT SCHEMA ------------------ */

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[A-Za-z\s]+$/, "Only letters allowed"),

  email: z.string().email("Invalid email address"),

  password: z
    .string()
    .min(7, "Minimum 7 characters")
    .regex(/[A-Z]/, "One uppercase letter required")
    .regex(/[a-z]/, "One lowercase letter required")
    .regex(/[^A-Za-z0-9]/, "One special character required"),

  bloodType: z.string().min(1, "Select blood type"),

  age: z.coerce.number().min(18).max(60),

  phoneNumber: z
    .string()
    .regex(/^1[3-9]\d{8}$/, "Enter valid BD number (1712345678)"),

  city: z.string().min(2),
});

export type SignUpInputData = z.infer<typeof SignUpSchema>;

/* ------------------ COMPONENT ------------------ */

export const SignUpView = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();

  const form = useForm<SignUpInputData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bloodType: "",
      age: 18,
      phoneNumber: "",
      city: "",
    },
  });

  const next = () => setStep((p) => Math.min(p + 1, 3));
  const prev = () => setStep((p) => Math.max(p - 1, 1));

  const onSubmit = async (value: SignUpInputData) => {
    try {
      const payload = {
        ...value,
        phoneNumber: `880${value.phoneNumber}`,
      };

      const res = await signUp(payload).unwrap();

      toast.success(res.message);
      router.push("/sign-in");
    } catch (err: any) {
      toast.error(err.message || "Signup failed");
    }
  };

  const progress = (step / 3) * 100;

  return (
    <div className="w-full max-w-md mx-auto bg-background rounded-xl border shadow-sm p-6">
      {/* HEADER */}

      <div className="space-y-2 mb-6 text-center">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <p className="text-sm text-muted-foreground">
          Join the blood donor network
        </p>
      </div>

      {/* PROGRESS BAR */}

      <div className="w-full h-2 bg-muted rounded mb-6">
        <div
          className="h-full bg-primary rounded transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* STEP TITLE */}

      <div className="text-sm font-medium text-muted-foreground mb-4">
        Step {step} of 3
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* STEP 1 */}

        {step === 1 && (
          <>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input {...field} placeholder="Rahim Ahmed" />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input {...field} placeholder="rahim@email.com" />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button type="button" onClick={next} className="w-full">
              Continue
            </Button>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <Controller
              name="bloodType"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Blood Type</FieldLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>

                    <SelectContent>
                      {BLOOD_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.replace("_", " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />

            <Controller
              name="age"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Age</FieldLabel>
                  <Input type="number" {...field} />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phoneNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Phone Number</FieldLabel>

                  <div className="flex">
                    <span className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-sm">
                      +880
                    </span>

                    <Input
                      {...field}
                      placeholder="1712345678"
                      className="rounded-l-none"
                    />
                  </div>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="flex gap-3">
              <Button variant="outline" type="button" onClick={prev}>
                Back
              </Button>

              <Button type="button" onClick={next} className="flex-1">
                Continue
              </Button>
            </div>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <Controller
              name="city"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>City</FieldLabel>
                  <Input {...field} placeholder="Dhaka" />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>

                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="pr-10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="flex gap-3">
              <Button variant="outline" type="button" onClick={prev}>
                Back
              </Button>

              <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                className="flex-1">
                Create Account
              </Button>
            </div>
          </>
        )}
      </form>

      {/* FOOTER */}

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-primary hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};
