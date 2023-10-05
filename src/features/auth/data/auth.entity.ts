export namespace AuthEntity {
  export type Entity = {
    id: string;
    email: string;
    password: string;
    name: string;
    refreshToken: string;
    accessToken: string;
  }
  export type session = Pick<Entity, 'accessToken' | 'refreshToken'>;
  export type loginDto = Pick<Entity, 'email'|'password'>
  export type signupDto = Pick<Entity, 'name'|'email'|'password'>

  export interface UserResponse {
    id: string
    name: string
    email: string
    createdAt: string
    updatedAt: string
  }

  export interface Store {
    user: UserResponse | null;
    isAuthenticated: boolean;
    session: session | null;
  }

  export type User = {
    name: string;
    email: string;
  };
  export type responseError = {
    message: string
    error: string
    statusCode: number
  }

}