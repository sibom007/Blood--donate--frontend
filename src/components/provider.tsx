"use client";
import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./ui/sonner";
import { CheckCircle2Icon, CircleXIcon } from "lucide-react";
import { TooltipProvider } from "./ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            retry: false,
            networkMode: "online",
          },
          mutations: {
            networkMode: "online",
            retry: 1,
          },
        },
      }),
    [],
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {children}
          <Toaster
            closeButton
            icons={{
              success: (
                <CheckCircle2Icon size={16} className="text-green-500" />
              ),
              error: <CircleXIcon size={16} className="text-red-500" />,
            }}
          />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};
