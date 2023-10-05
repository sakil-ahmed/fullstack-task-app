"use client"
import React, {useEffect} from "react";
import {persistStore} from "@/features/auth/logic/persist.store";
import {authStore, useAuthStore} from "@/features/auth/logic/auth.store";
import {
  QueryClient,
  QueryClientProvider,


} from '@tanstack/react-query'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter, usePathname} from "next/navigation";


export const ClientProvider = ({children}: { children: React.ReactNode }) => {


  const router = useRouter()
  const pathname = usePathname()
  const {isAuthenticated} = useAuthStore()

  useEffect(() => {
    const isAuthRoute = pathname.split('/').includes('auth');

    if (!isAuthRoute && !isAuthenticated) {
      router.push('/auth/login')
    }
    if (isAuthRoute && isAuthenticated) {
      router.push('/board')
    }
  }, [children, isAuthenticated, router, pathname]);


  const queryClient = new QueryClient()
  persistStore(authStore, 'AUTH');
  return (<QueryClientProvider client={queryClient}>
    {children}
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </QueryClientProvider>)
}