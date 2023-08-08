import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { UserLoginFrm } from "../../../Page/Auth/Login/Login";
import { UserSignupFrm } from "../../../Page/Auth/Register/Register";
import { http, httpNonAuth, TOKEN } from "../../../Utils/config";
import { USER_LOGIN, USER_SIGNUP } from "../../../Utils/constant";
import storage from "../../../Utils/storage";
import store from "../configStore";
export interface UserModel {
  email: "";
  password: "";
}
export interface RegisModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: [];
  certification: [];
}
export interface UserState {
  userLogin: UserModel | undefined;
  userRegister: RegisModel | undefined;
  isOpen: boolean;
}

const initialState: UserState = {
  userLogin: storage.get(USER_LOGIN),
  userRegister: storage.get(USER_SIGNUP),
  isOpen: false,
};
const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    /*
        Các trạng thái của 1 action api
        + pending: Khi api đang được thực hiện
        + fulfilled: khi kết quả api trả về thành công
        + rejected: Khi kết quả api trả về thất bại
     */
    // Xử lý dữ liệu trả về api
    builder
      .addCase(loginAsyncAction.pending, (state: UserState, action: any) => {
        state.isOpen = true;
      })

      .addCase(
        loginAsyncAction.fulfilled,
        (state: UserState, action: PayloadAction<UserModel>) => {
          alert("Dang Nhap thanh cong");
          state.userLogin = action.payload;
          state.isOpen = true;
        }
      )
      .addCase(loginAsyncAction.rejected, (state: UserState, action: any) => {
        state.isOpen = false;
        alert("Sai ten dang nhap hoac mat khau");
      })
      .addCase(signupAsyncAction.pending, (state: UserState, action: any) => {})
      .addCase(
        signupAsyncAction.fulfilled,
        (state: UserState, action: PayloadAction<RegisModel>) => {
          alert("Dang ki thanh cong");
          state.userRegister = action.payload;
          window.location.pathname = "/home";
        }
      )
      .addCase(signupAsyncAction.rejected, (state: UserState, action: any) => {
        alert(action.payload.content);
        console.error("Signup failed:", action.payload);
      });
  },
});

export const {} = userReducer.actions;

export default userReducer.reducer;
// ------------------ create asycn action ----------------------
export const loginAsyncAction = createAsyncThunk(
  "loginAsyncAction",
  async (userLogin: UserLoginFrm) => {
    //call api
    const res = await http.post("auth/signin", userLogin);
    if (res.data.content.token) {
      storage.set(USER_LOGIN, res.data.content);
      storage.set(TOKEN, res.data.content.token);
      window.location.pathname = "/home";
    }

    return res.data.content;
  }
);
export const signupAsyncAction = createAsyncThunk(
  "signupAsyncAction",
  async (userRegister: UserSignupFrm, { rejectWithValue }) => {
    try {
      const res = await http.post("auth/signup", userRegister);
      console.log(res.data.content);
      return res.data.content;
    } catch (error: any) {
      console.error("Error during signup:", error);
      return rejectWithValue(error.response.data); // Trả về lỗi từ backend
    }
  }
);
