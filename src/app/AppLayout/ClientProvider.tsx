"use client";
import React, { useEffect } from "react";
import { persistStore } from "@/features/auth/logic/persist.store";
import { authStore, useAuthStore } from "@/features/auth/logic/auth.store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname } from "next/navigation";
import { taskStore } from "@/features/task/logic/task.store";
import { ChakraProvider } from "@chakra-ui/react";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  persistStore(authStore, "AUTH");
  persistStore(taskStore, "TASK");

  const queryClient = new QueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const isAuthRoute = pathname.split("/").includes("auth");
    console.log(isAuthenticated);

    if (!isAuthRoute && !isAuthenticated) {
      router.push("/auth/login");
    }
    if (isAuthRoute && isAuthenticated) {
      router.push("/board");
    }
  }, [isAuthenticated, pathname, router]);

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
