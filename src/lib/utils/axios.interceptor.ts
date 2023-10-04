import axios from "axios";
import {authService} from "@/features/auth/logic/auth.service";
import {jwtService} from "@/features/auth/logic/jwt.service";

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_API;
axios.defaults.baseURL = baseURL;

const httpService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


httpService.interceptors.request.use(
  async (req) => {
    const session = authService.getSession();
    // DOES SESSION EXIST
    if (session === null) {
      authService.clearSession();
      return req;
    }

    // DID REFRESH TOKEN EXPIRED
    // if (jwtService.isExpired(session.refreshToken)) {
    //   authService.clearSession();
    //   return req;
    // }

    // DID ACCESS TOKEN EXPIRED
    // if (jwtService.isExpired(session.accessToken)) {
    // 	const { accessToken } = await authService.refreshToken({
    // 		refreshToken: session.refreshToken,
    // 	});
    // 	req.headers = {
    // 		...req.headers,
    // 		authorization: `Bearer ${accessToken}`,
    // 	};
    // 	return req;
    // }

    // ADD ACCESS_TOKEN & RETURN REQUEST
    // @ts-ignore
    req.headers = {
      ...req.headers,
      authorization: `Bearer ${session.accessToken}`,
    };

    return req;
  },
  (error) => {
    console.error('No access token found. Please login again.');
    return Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
httpService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorResponse = error.response;
    // notify({
    //   message: errorResponse.message,
    //   type: 'error',
    // });
    return Promise.reject(errorResponse);
  },
);

export default httpService;
