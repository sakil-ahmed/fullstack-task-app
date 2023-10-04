import {AuthEntity} from "@/features/auth/data/auth.entity";

export class JWTService {
  public decodeToken(token: string): any {
    const actualToken = token.split('.')[1];

    if (!actualToken) return null;

    return JSON.parse(window.atob(actualToken));
  }

  // public isExpired(token: string): boolean {
  //   const user: AuthEntity.User = this.decodeToken(token);
  //   const now = new Date().getTime() / 1000;
  //   return user.exp < now;
  // }
}

export const jwtService = new JWTService();