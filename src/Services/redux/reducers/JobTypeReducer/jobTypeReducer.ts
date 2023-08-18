import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";

export interface JobTypeModel {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}

export interface DsNhomChiTietLoai {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: DsChiTietLoai[];
}

export interface DsChiTietLoai {
  id: number;
  tenChiTiet: string;
}
export interface JobTypeState {
  arrType: JobTypeModel[];
  isLoading: boolean;
}
const initialState: JobTypeState = {
  arrType: [],
  isLoading: false,
};

const jobTypeReducer = createSlice({
  name: "jobTypeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(jobTypeAsync.pending, (state: JobTypeState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        jobTypeAsync.fulfilled,
        (state: JobTypeState, action: PayloadAction<JobTypeModel[]>) => {
          state.arrType = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(jobTypeAsync.rejected, (state: JobTypeState, action: any) => {});
  },
});

export const {} = jobTypeReducer.actions;

export default jobTypeReducer.reducer;

//------------------------- async API -----------------------
export const jobTypeAsync = createAsyncThunk(
  "jobTypeAsync",
  async (id: number) => {
    try {
      const res = await http.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
      return res.data.content;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
