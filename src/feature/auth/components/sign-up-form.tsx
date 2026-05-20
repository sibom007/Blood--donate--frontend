"use client";

import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Mail,
  Lock,
  MapPin,
  User,
  Eye,
  EyeOff,
  ArrowUpRightFromSquareIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "lucide-react";
import {
  bloodGroup,
  bloodGroupLabels,
  SignUpFormValues,
  signUpSchema,
} from "../types";
import { useSignUp } from "../hooks/use-sign-up";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();

  const { mutate, isPending } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bloodType: undefined,
      location: "",
      age: "18",
      bio: "",
      bloodDonner: "YES",
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        reset({
          name: "",
          email: "",
          password: "",
          bloodType: undefined,
          location: "",
          age: "18",
          bio: "",
          bloodDonner: "YES",
        });
        router.push("/sign-in");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="absolute top-10 left-20">
        <Link
          href={"/"}
          className={`${buttonVariants({ variant: "default" })}`}>
          <ArrowLeftIcon />
          Back
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl">
        <div className="rounded-2xl border bg-card p-6 shadow-[0_10px_40px_-12px_hsl(var(--primary)/0.15)]">
          {/* Header */}
          <div className="mb-6 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create Account
            </h1>

            <p className="text-sm text-muted-foreground">
              Create your donor account
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
              <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Name */}
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
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel className="mb-2">Full Name</FieldLabel>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="John Doe"
                            className="
                        pl-10

                        "
                          />
                        )}
                      />
                    </div>

                    {errors.name && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.name.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>

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
                  {/* Blood Group */}
                  <Field data-invalid={!!errors.bloodType}>
                    <FieldLabel className="mb-2">Blood Group</FieldLabel>

                    <Controller
                      name="bloodType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}>
                          <SelectTrigger className="h-11 rounded-xl shadow-sm">
                            <SelectValue placeholder="Select group" />
                          </SelectTrigger>

                          <SelectContent>
                            {Object.values(bloodGroup).map((group) => (
                              <SelectItem key={group} value={group}>
                                {bloodGroupLabels[group]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.bloodType && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.bloodType.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>

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
                  {/* Location */}
                  <Field data-invalid={!!errors.location}>
                    <FieldLabel className="mb-2">Location</FieldLabel>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                      <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Dhaka"
                            className="
                        
                        pl-10
                        
                        "
                          />
                        )}
                      />
                    </div>

                    {errors.location && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.location.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>
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
                  {/* Age */}
                  <Field data-invalid={!!errors.age}>
                    <FieldLabel className="mb-2">Age</FieldLabel>

                    <Controller
                      name="age"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} type="number" placeholder="24" />
                      )}
                    />

                    {errors.age && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.age.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>

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
                  {/* Donate Blood */}
                  <Field data-invalid={!!errors.bloodDonner}>
                    <FieldLabel className="mb-2">Donate Blood</FieldLabel>

                    <Controller
                      name="bloodDonner"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="h-11 rounded-xl shadow-sm">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="YES">YES</SelectItem>

                            <SelectItem value="NO">NO</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.bloodDonner && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.bloodDonner.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>
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
                  {/* Email */}
                  <Field data-invalid={!!errors.email}>
                    <FieldLabel className="mb-2">Email</FieldLabel>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@example.com"
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
                  }}
                  className="md:col-span-2">
                  {/* Password */}
                  <Field data-invalid={!!errors.password}>
                    <FieldLabel className="mb-2">Password</FieldLabel>

                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="
                        
                        pl-10
                        pr-10
                        shadow-sm
                        "
                          />
                        )}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
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
                  }}
                  className="md:col-span-2">
                  {/* Bio */}
                  <Field data-invalid={!!errors.bio}>
                    <FieldLabel className="mb-2">Bio</FieldLabel>

                    <Controller
                      name="bio"
                      control={control}
                      render={({ field }) => (
                        <Textarea
                          {...field}
                          placeholder="Write something..."
                          className="w-full min-h-30
resize-none
"
                        />
                      )}
                    />

                    {errors.bio && (
                      <FieldError className="animate-in fade-in-0 zoom-in-95">
                        {errors.bio.message}
                      </FieldError>
                    )}
                  </Field>
                </motion.div>

                {/* Button */}
                <div className="md:col-span-2">
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}>
                    <Button
                      type="submit"
                      disabled={isPending}
                      tabIndex={-1}
                      className="
                          w-full
                          disabled:pointer-events-none
                          disabled:opacity-70
                      ">
                      {isPending ? "Creating Account..." : "Create Account"}
                    </Button>
                  </motion.div>
                </div>

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
                    Do you have an account?
                    <Link
                      href="/sign-in"
                      className="
                      ml-1
                      font-medium
                      text-primary
                      hover:underline
                      ">
                      Login account
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
