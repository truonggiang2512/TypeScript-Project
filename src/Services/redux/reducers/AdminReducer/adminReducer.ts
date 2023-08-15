import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
export interface User {
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
export interface Job {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}
export interface JobType {
  id: number;
  tenLoaiCongViec: string;
}
export interface HireJob {
  id: number;
  maCongViec: number;
  maNguoiThue: number;
  ngayThue: string;
  hoanThanh: boolean;
}
export interface ContentState {
  arrUser: User[];
  arrJob: Job[];
  arrJobType: JobType[];
  arrHire: HireJob[];
}
const initialState = {
  arrUser: [],
  arrJob: [],
  arrJobType: [],
  arrHire: [],
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      // Get all User
      .addCase(getUserAsync.pending, (state: ContentState, action: any) => {})
      .addCase(
        getUserAsync.fulfilled,
        (state: ContentState, action: PayloadAction<User[]>) => {
          state.arrUser = action.payload;
        }
      )
      .addCase(getUserAsync.rejected, (state: ContentState, action: any) => {})
      // get All Job
      .addCase(getJobAsync.pending, (state: ContentState, action: any) => {})
      .addCase(
        getJobAsync.fulfilled,
        (state: ContentState, action: PayloadAction<Job[]>) => {
          state.arrJob = action.payload;
        }
      )
      .addCase(getJobAsync.rejected, (state: ContentState, action: any) => {})
      //Get Type of Job
      .addCase(
        getJobTypeAsync.pending,
        (state: ContentState, action: any) => {}
      )
      .addCase(
        getJobTypeAsync.fulfilled,
        (state: ContentState, action: PayloadAction<JobType[]>) => {
          state.arrJobType = action.payload;
        }
      )
      .addCase(
        getJobTypeAsync.rejected,
        (state: ContentState, action: any) => {}
      )
      //Hire Job
      .addCase(
        getJobHireAsync.pending,
        (state: ContentState, action: any) => {}
      )
      .addCase(
        getJobHireAsync.fulfilled,
        (state: ContentState, action: PayloadAction<HireJob[]>) => {
          state.arrHire = action.payload;
        }
      )
      .addCase(
        getJobHireAsync.rejected,
        (state: ContentState, action: any) => {}
      );
  },
});

export const {} = adminReducer.actions;

export default adminReducer.reducer;

//--------------getUserAsync-----------
export const getUserAsync = createAsyncThunk("getUserAsync", async () => {
  try {
    const res = await http.get("users");
    console.log(res.data.content);
    return res.data.content;
  } catch (error) {
    throw error;
  }
});

//--------------getJobAsync-----------
export const getJobAsync = createAsyncThunk("getJobAsync", async () => {
  try {
    const res = await http.get("cong-viec");
    return res.data.content;
  } catch (error) {
    throw error;
  }
});

//--------------getJobTypeAsync-----------
export const getJobTypeAsync = createAsyncThunk("getJobTypeAsync", async () => {
  try {
    const res = await http.get("loai-cong-viec");
    return res.data.content;
  } catch (error) {
    throw error;
  }
});
//--------------getJobHireAsync-----------
export const getJobHireAsync = createAsyncThunk("getJobHireAsync", async () => {
  try {
    const res = await http.get("thue-cong-viec");
    return res.data.content;
  } catch (error) {
    throw error;
  }
});
