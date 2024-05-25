"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";

import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { AuthProvider } from "../AuthProviders/AuthProviders";

const DProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <Provider store={store}>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
};

export default DProvider;
