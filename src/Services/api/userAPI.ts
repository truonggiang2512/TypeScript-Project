import { http } from "../../Utils/config";
import { USER_LOGIN, USER_PROFILE } from "../../Utils/constant";
import storage from "../../Utils/storage";
const USER_URL: any = {
  signup: "auth/signup",
  signin: "auth/signin",
  getProfile: "users",
};
const userAPI = {
  signup: async (data: any) => {
    try {
      const result = await http.post(USER_URL.signup, data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return result.data;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      throw error;
    }
  },
  signin: async (data: any) => {
    try {
      const result = await http.post(USER_URL.signin, data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      storage.save(USER_LOGIN, result.data.content);
      return result.data;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      throw error;
    }
  },
};
