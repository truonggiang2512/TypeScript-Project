import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
import { USER_LOGIN } from "../../../../Utils/constant";
import storage from "../../../../Utils/storage";
export interface ProfileModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
  skill: string[] | null;
  certification: string[] | null;
  bookingJob: string[];
}
export interface ProfileState {
  arrProfile: ProfileModel[];
}

const initialState: ProfileState = {
  arrProfile: [],
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(
        getProfileAsync.pending,
        (state: ProfileState, action: any) => {}
      )
      .addCase(
        getProfileAsync.fulfilled,
        (state: ProfileState, action: PayloadAction<ProfileModel[]>) => {
          state.arrProfile = action.payload;
        }
      )
      .addCase(
        getProfileAsync.rejected,
        (state: ProfileState, action: any) => {}
      );
  },
});

export const {} = profileReducer.actions;

export default profileReducer.reducer;

//------------------- create ayscn action--------------
export const getProfileAsync = createAsyncThunk(
  "getProfileAsync",
  async (id: number) => {
    //call api
    try {
      // Call API
      const res = await http.get(`users/${id}`);
      return res.data.content || []; // Trả về mảng, hoặc mảng rỗng nếu không có dữ liệu
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error; // Ném lỗi để createAsyncThunk xử lý
    }
  }
);
