"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
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
import { setToLocalStorage } from "@/lib/local-storage";
import { authKey } from "@/lib/authkey";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/feature/auth/auth-slice";
import type { AppDispatch } from "@/Redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginAction } from "../actions/login-actions";

export const SignInView = () => {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInInputData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "soffy@gmail.com",
      password: "Sibom@12345",
    },
  });

  const onSubmit = (value: SignInInputData) => {
    startTransition(async () => {
      try {
        const res = await loginAction(value);

        toast.success(res.message);

        setToLocalStorage(authKey, res.accessToken);

        dispatch(
          setCredentials({
            user: res.user,
          }),
        );

        const safeRedirect =
          redirectPath && redirectPath.startsWith("/")
            ? redirectPath
            : "/dashboard";

        router.refresh();
        router.push(safeRedirect);
      } catch (err: any) {
        toast.error(err.message || "Login failed");
      }
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 text-center space-y-1">
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to access your dashboard
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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

                <div className="relative">
                  <Input
                    {...rest}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            );
          }}
        />

        {/* SUBMIT */}
        <Button
          loading={isPending}
          disabled={isPending}
          type="submit"
          className="w-full">
          Sign In
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-primary hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
