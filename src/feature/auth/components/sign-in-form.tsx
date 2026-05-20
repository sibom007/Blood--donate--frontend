"use client";

import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";

import { Mail, Lock, Eye, EyeOff, ArrowLeftIcon } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

import { SignInFormValues, signInSchema } from "../types";

import { toast } from "sonner";
import { useSignIn } from "../hooks/use-sign-in";
import useAuthStore from "@/zustant/auth-zustand";

export default function SignInForm() {
  const { mutate, isPending } = useSignIn();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        useAuthStore.setState({
          accessToken: data.data.accessToken,
          user: data.data.user,
          isAuthenticated: true,
        });
        reset({
          email: "",
          password: "",
        });
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      {/* Back Button */}
      <div className="absolute left-20 top-10">
        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
          })}>
          <ArrowLeftIcon />
          Back
        </Link>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-full max-w-md">
        <div className="rounded-2xl border bg-card p-6 shadow-[0_10px_40px_-12px_hsl(var(--primary)/0.15)]">
          {/* Header */}
          <div className="mb-6 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>

            <p className="text-sm text-muted-foreground">
              Sign in to your donor account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},

                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}>
              <FieldGroup className="space-y-4">
                {/* Email */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}>
                  <Field data-invalid={!!errors.email}>
                    <FieldLabel className="mb-2">Email</FieldLabel>

                    <div className="relative">
                      <Mail
                        className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-muted-foreground
                        "
                      />

                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            autoComplete="email"
                            placeholder="john@example.com"
                            aria-invalid={!!errors.email}
                            className="
                            pl-10
                            "
                          />
                        )}
                      />
                    </div>

                    {errors.email && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.email.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>

                {/* Password */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}>
                  <Field data-invalid={!!errors.password}>
                    <FieldLabel className="mb-2">Password</FieldLabel>

                    <div className="relative">
                      <Lock
                        className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-muted-foreground
                        "
                      />

                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="••••••••"
                            aria-invalid={!!errors.password}
                            className="
                            pl-10
                            pr-10
                            "
                          />
                        )}
                      />

                      <button
                        type="button"
                        tabIndex={-1}
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-muted-foreground
                        ">
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {errors.password && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.password.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>

                {/* Button */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}>
                  <motion.div
                    whileTap={{
                      scale: 0.98,
                    }}
                    whileHover={{
                      scale: 1.01,
                    }}>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="
                      w-full
                      disabled:pointer-events-none
                      disabled:opacity-70
                      ">
                      {isPending ? "Signing In..." : "Sign In"}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}>
                  <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?
                    <Link
                      href="/sign-up"
                      className="
                      ml-1
                      font-medium
                      text-primary
                      hover:underline
                      ">
                      Create account
                    </Link>
                  </p>
                </motion.div>
              </FieldGroup>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
