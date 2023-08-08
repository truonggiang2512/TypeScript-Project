import { createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../../../Utils/constant";
import storage from "../../../Utils/storage";
export interface UserModel {
  email: string;
  password: string;
}
export interface UserState {
  userLogin: UserState | undefined;
  isLoading: boolean;
}
const initialState = {
  userLogin: storage.get(USER_LOGIN),
  isLoading: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
});

export const {} = userReducer.actions;

export default userReducer.reducer;
