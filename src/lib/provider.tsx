"use client";
import React from "react";

import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "@/Redux/store";
import { Toaster } from "@/components/ui/sonner";
import { PersistGate } from "redux-persist/integration/react";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReduxProvider store={store}>
        <TooltipProvider>
          <PersistGate loading={null} persistor={persistor}>
            {children}
            <Toaster />
          </PersistGate>
        </TooltipProvider>
      </ReduxProvider>
    </>
  );
};
