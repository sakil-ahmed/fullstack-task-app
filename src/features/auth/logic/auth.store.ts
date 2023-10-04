import { createStore, withDevTools } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';
import {AuthEntity} from "@/features/auth/data/auth.entity";



export const authInitial:AuthEntity.Store = {
  user: null,
  isAuthenticated: false,
  session: null,
};

export const authStore = createStore(authInitial);

export const useAuthStore = () => useStore<AuthEntity.Store>(authStore);

if (process.env.NODE_ENV === 'development') {
  withDevTools(authStore, 'AUTH');
}