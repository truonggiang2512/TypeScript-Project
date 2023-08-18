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
  isLoading: boolean;
  isOpen: boolean;
}

const initialState: UserState = {
  userLogin: storage.get(USER_LOGIN),
  userRegister: storage.get(USER_SIGNUP),
  isLoading: false,
  isOpen: false,
};
const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(loginAsyncAction.pending, (state: UserState, action: any) => {
        state.isOpen = true;
        state.isLoading = true;
      })

      .addCase(
        loginAsyncAction.fulfilled,
        (state: UserState, action: PayloadAction<UserModel>) => {
          state.userLogin = action.payload;
          state.isOpen = true;
          state.isLoading = false;
        }
      )
      .addCase(loginAsyncAction.rejected, (state: UserState, action: any) => {
        state.isOpen = false;
        state.isLoading = false;
        alert("Sai ten dang nhap hoac mat khau");
      })
      .addCase(signupAsyncAction.pending, (state: UserState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        signupAsyncAction.fulfilled,
        (state: UserState, action: PayloadAction<RegisModel>) => {
          state.isLoading = false;
          state.userRegister = action.payload;
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
  async (userRegister: UserSignupFrm, { dispatch, rejectWithValue }) => {
    try {
      const res = await http.post("auth/signup", userRegister);
      if (res.status === 200) {
        await dispatch(
          loginAsyncAction({
            email: userRegister.email,
            password: userRegister.password,
          })
        );
      } else {
        return;
      }
      console.log(res.data.content);
      return res.data.content;
    } catch (error: any) {
      console.error("Error during signup:", error);
      return rejectWithValue(error.response.data);
    }
  }
);
