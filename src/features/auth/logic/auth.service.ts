import {AuthEntity} from "@/features/auth/data/auth.entity";
import {authInitial, authStore} from "@/features/auth/logic/auth.store";
import httpService from "@/lib/utils/axios.interceptor";

export class AuthService {

  public async login(dto: any) {
    const res: any = await httpService.post('/auth/login', dto)
    const {accessToken, refreshToken, user} = res
    this.updateSession({accessToken, refreshToken})
    authStore.setUser(user)
  }


  public updateSession(session: AuthEntity.Store['session']) {
    authStore.setSession(session);
    authStore.setIsAuthenticated(true);
  }


  public getSession(): AuthEntity.session | null {
    return authStore.getState().session;
  }

  public clearSession(): void {
    authStore.setState(authInitial);
    window && window.localStorage.clear();
  }
}

export const authService = new AuthService();