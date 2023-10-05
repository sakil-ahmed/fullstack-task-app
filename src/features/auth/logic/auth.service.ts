import {AuthEntity} from "@/features/auth/data/auth.entity";
import {authInitial, authStore} from "@/features/auth/logic/auth.store";
import httpService from "@/lib/utils/axios.interceptor";
import {Notify} from "@/lib/utils/Notify";

export class AuthService {

  public async login(dto: AuthEntity.loginDto) {
    const res: any = await httpService.post('/auth/login', dto)
    const {accessToken, refreshToken, user} = res
    this.updateSession({accessToken, refreshToken})
    authStore.setUser(user)
    return res
  }

  public async signUp(dto: AuthEntity.signupDto) {
    const res: any = await httpService.post('/auth/signup', dto)
    const {accessToken, refreshToken, user} = res
    this.updateSession({accessToken, refreshToken})
    authStore.setUser(user)
    return res

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