import jwt_decode from "jwt-decode";
import axios from "axios";
import storage from "./storage";
import { createBrowserHistory } from "history";
import { USER_LOGIN } from "./constant";
// Tạo một instance của history
const history = createBrowserHistory();
//setup constant
export const DOMAIN = "https://fiverrnew.cybersoft.edu.vn/api/";
export const TOKEN = "accessToken";
export const TOKEN_CYBERSOFT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzQiLCJIZXRIYW5TdHJpbmciOiIyMi8wMy8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MTEwNjU2MDAwMDAiLCJuYmYiOjE2OTMwNjkyMDAsImV4cCI6MTcxMTIxMzIwMH0.I9k3be3bbxp64NISKJ-A3aR6mEhF4QfCGakizTqBON8`;

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
export const httpNonAuth = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
httpNonAuth.interceptors.request.use(
  (config: any) => {
    config.baseURL = DOMAIN;
    config.headers = { ...config.headers };
    config.headers.TOKEN_CYBERSOFT = "TOKEN_CYBERSOFT";

    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);
http.interceptors.request.use(
  (config: any) => {
    config.headers = { ...config.headers };
    let token = storage.get(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = `${TOKEN_CYBERSOFT}`;
    console.log(config);
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);
http.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (err: any) => {
    console.log(err);
    if (err.response?.stats === 401) {
      //Đã đăng nhập nhưng hết hạn (gọi api refresh token)
      let decodedToken: any = jwt_decode(storage.get(USER_LOGIN).accessToken);
      console.log("Decoded Token", decodedToken);
      let currentDate = new Date();
      // JWT exp is in seconds
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        //Remove userlogin trong localstorage
        localStorage.removeItem(USER_LOGIN);
        //Chuyển hướng về đăng nhập
        history.push("/login");
      }
      //Chưa đăng nhập
      alert("Đăng nhập để vào trang này !");
      history.push("/login");
    }
    if (err.response?.status === 403) {
      alert("Không đủ quyền truy cập vào trang này !");
      history.push("/login");
    }
    return Promise.reject(err);
  }
);
