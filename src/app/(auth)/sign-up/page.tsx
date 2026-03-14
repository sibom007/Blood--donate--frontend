import React from "react";
import Image from "next/image";
import { SignUpView } from "@/feature/auth/components/sign-up-view";

export default function SignUp() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block relative">
        <Image
          src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
          alt="blood donation"
          fill
          className="object-cover"
        />
      </div>

      {/* FORM */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-card border border-border shadow-xl rounded-xl p-8">
          {/* TITLE */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-primary">
              Become a Blood Donor
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
              Complete the steps below to create your donor account
            </p>
          </div>

          {/* STEP PROGRESS */}
          <SignUpView />
        </div>
      </div>
    </div>
  );
}
