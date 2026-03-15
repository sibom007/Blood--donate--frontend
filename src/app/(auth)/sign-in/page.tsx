import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { SignInView } from "@/feature/auth/components/sign-in-view";

export default function SignIn() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* IMAGE SIDE */}
      <div className="hidden lg:block relative">
        <Image
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4"
          alt="blood donation"
          fill
          className="object-cover"
        />
      </div>

      {/* FORM SIDE */}
      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-card border-border shadow-lg">
          <CardContent>
            <SignInView />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
