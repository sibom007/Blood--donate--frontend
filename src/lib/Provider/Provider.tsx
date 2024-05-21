import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <Toaster />
      {children}
    </AppRouterCacheProvider>
  );
};

export default Provider;
