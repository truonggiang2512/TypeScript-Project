import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
export interface DetailModel {
  id: number;
  congViec: CongViec;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViec {
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
export interface DetailState {
  arrDetail: DetailModel[];
  isLoading: boolean;
}
const initialState: DetailState = {
  arrDetail: [],
  isLoading: false,
};

const detailReducer = createSlice({
  name: "detailReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(detailAsyncAPI.pending, (state: DetailState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        detailAsyncAPI.fulfilled,
        (state: DetailState, action: PayloadAction<DetailModel[]>) => {
          state.arrDetail = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        detailAsyncAPI.rejected,
        (state: DetailState, action: any) => {}
      );
  },
});

export const {} = detailReducer.actions;

export default detailReducer.reducer;

//-------------Async API-----------
export const detailAsyncAPI = createAsyncThunk(
  "detailAsyncAPI",
  async (id: any) => {
    try {
      const res = await http.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
      return res.data.content;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
