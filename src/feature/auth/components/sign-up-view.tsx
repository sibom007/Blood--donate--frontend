"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BLOOD_TYPES, SignUpInputData, SignUpSchema } from "../type";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useSignUpMutation } from "@/Redux/api/auth-api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const SignUpView = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(1);
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

  const onSubmit = async (value: SignUpInputData) => {
    try {
      const res = await signUp(value).unwrap();
      toast.success(res.message);
      router.push("/sign-in");
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    }
  };

  const next = () => setStep((p) => Math.min(p + 1, 3));
  const prev = () => setStep((p) => Math.max(p - 1, 1));

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        {[1, 2, 3].map((n, index) => (
          <React.Fragment key={n}>
            <div className="flex flex-col items-center relative">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full
                text-sm font-semibold transition-all
                ${
                  step === n
                    ? "bg-primary text-primary-foreground shadow-lg scale-110"
                    : step > n
                      ? "bg-accent text-white"
                      : "bg-muted text-muted-foreground"
                }`}>
                {step > n ? "✓" : n}
              </div>

              <span className="text-xs mt-2 text-muted-foreground">
                {n === 1 && "Account"}
                {n === 2 && "Health"}
                {n === 3 && "Security"}
              </span>
            </div>

            {index < 2 && (
              <div
                className={`flex-1 h-1 mx-2 rounded ${
                  step > n ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => {
                const { ref, ...rest } = field;
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Name</FieldLabel>
                    <Input {...rest} placeholder="Rahim Ahmed" />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => {
                const { ref, ...rest } = field;
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email</FieldLabel>
                    <Input {...rest} placeholder="rahim@email.com" />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <Button type="button" onClick={next} className="w-full">
              Next
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
              render={({ field, fieldState }) => {
                const { ref, ...rest } = field;
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Age</FieldLabel>
                    <Input type="number" {...rest} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <Controller
              name="phoneNumber"
              control={form.control}
              render={({ field, fieldState }) => {
                const { ref, ...rest } = field;
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Phone Number</FieldLabel>
                    <Input {...rest} placeholder="01712345678" />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={prev}>
                Back
              </Button>

              <Button type="button" onClick={next} className="flex-1">
                Next
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
              render={({ field, fieldState }) => {
                const { ref, ...rest } = field;
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>City</FieldLabel>
                    <Input {...rest} placeholder="Dhaka" />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                const { ref, ...rest } = field;
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Password</FieldLabel>
                    <Input type="password" {...rest} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={prev}>
                Back
              </Button>

              <Button
                loading={isLoading}
                disabled={isLoading}
                type="submit"
                className="flex-1">
                Create Account
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
