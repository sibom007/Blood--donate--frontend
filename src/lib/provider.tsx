"use client";
import React from "react";

import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "@/Redux/store";
import { Toaster } from "@/components/ui/sonner";
import { PersistGate } from "redux-persist/integration/react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <Toaster />
        </PersistGate>
      </ReduxProvider>
    </>
  );
};
