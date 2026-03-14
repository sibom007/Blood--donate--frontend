"use client";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { SignInInputData, SignInSchema } from "../type";
import { useSignInMutation } from "@/Redux/api/auth-api";
import { setToLocalStorage } from "@/lib/local-storage";
import { authKey } from "@/lib/authkey";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/feature/auth/auth-slice";
import type { AppDispatch } from "@/Redux/store";
import { useRouter } from "next/navigation";

export const SignInView = () => {
  const [signIn, { isLoading }] = useSignInMutation();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const form = useForm<SignInInputData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "soffy@gmail.com",
      password: "7777777",
    },
  });

  const onSubmit = async (value: SignInInputData) => {
    try {
      const res = await signIn(value).unwrap();
      toast.success(res.message);

      // store token
      setToLocalStorage(authKey, res.data.token);

      // store user in redux

      dispatch(
        setCredentials({
          user: {
            id: res.data.user.id,
            name: res.data.user.name,
            email: res.data.user.email,
            role: res.data.user.role,
            isAvailable: res.data.user.isAvailable,
            tokenVersion: res.data.user.tokenVersion,
          },
          accessToken: res.data.token,
        }),
      );

      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* EMAIL */}
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => {
          const { ref, ...rest } = field;

          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Email</FieldLabel>

              <Input {...rest} placeholder="example@email.com" />

              <FieldDescription>Enter your registered email</FieldDescription>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />

      {/* PASSWORD */}
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => {
          const { ref, ...rest } = field;

          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Password</FieldLabel>

              <Input type="password" {...rest} placeholder="••••••••" />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />

      <Button
        loading={isLoading}
        disabled={isLoading}
        type="submit"
        className="w-full">
        Sign In
      </Button>
    </form>
  );
};
