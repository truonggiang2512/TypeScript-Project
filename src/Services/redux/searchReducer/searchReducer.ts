import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../Utils/config";
export interface LoaiCongViecModal {
  id: number;
  congViec: CongViecModal;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViecModal {
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
export interface CongViecState {
  arrSearch: LoaiCongViecModal[];
}
const initialState: CongViecState = {
  arrSearch: [],
};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      searchJobAsync.pending,
      (state: CongViecState, action: any) => {}
    );
    builder.addCase(
      searchJobAsync.fulfilled,
      (state: CongViecState, action: PayloadAction<LoaiCongViecModal[]>) => {
        state.arrSearch = action.payload;
      }
    );
    builder.addCase(
      searchJobAsync.rejected,
      (state: CongViecState, action: any) => {}
    );
    builder.addCase(
      searchIDAsync.pending,
      (state: CongViecState, action: any) => {}
    );
    builder.addCase(
      searchIDAsync.fulfilled,
      (state: CongViecState, action: PayloadAction<LoaiCongViecModal[]>) => {
        state.arrSearch = action.payload;
      }
    );
    builder.addCase(
      searchIDAsync.rejected,
      (state: CongViecState, action: any) => {}
    );
  },
});

export const {} = searchReducer.actions;

export default searchReducer.reducer;

//------------------asyncApi------------------
export const searchJobAsync = createAsyncThunk(
  "searchJobAsync",
  async (tenCongViec: string) => {
    // call api
    try {
      const res = await http.get(
        `cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`
      );
      const dataWithTenCongViec = {
        tenCongViec: tenCongViec,
        data: res.data.content || [],
      };
      console.log(dataWithTenCongViec);
      return dataWithTenCongViec;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
export const searchIDAsync = createAsyncThunk(
  "searchIDAsync",
  async (id: number) => {
    try {
      const res = await http.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
      return res.data.content;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
