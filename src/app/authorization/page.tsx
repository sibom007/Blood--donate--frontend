"use client";

import AuthForm from "./components/AuthForm";
import { useState } from "react";

const AuthorizationPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center px-2 sm:px-6 lg:px-8 bg-gray-100 rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl text-center font-bold tracking-tight text-gray-900">
          sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthorizationPage;
