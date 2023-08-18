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

export interface DsChiTietLoai {
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
export interface CongViecState {
  arrSearch: LoaiCongViecModal[];
  arrChiTiet: DsChiTietLoai[];
  arrChiTietLoai: LoaiCongViecModal[];
  isLoading: boolean;
}
const initialState: CongViecState = {
  arrSearch: [],
  arrChiTiet: [],
  arrChiTietLoai: [],
  isLoading: false,
};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      searchJobAsync.pending,
      (state: CongViecState, action: any) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      searchJobAsync.fulfilled,
      (state: CongViecState, action: PayloadAction<LoaiCongViecModal[]>) => {
        state.arrSearch = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      searchJobAsync.rejected,
      (state: CongViecState, action: any) => {}
    );
    //-----------------Search Job ID--------------
    builder.addCase(
      searchIDAsync.pending,
      (state: CongViecState, action: any) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      searchIDAsync.fulfilled,
      (state: CongViecState, action: PayloadAction<LoaiCongViecModal[]>) => {
        state.arrSearch = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      searchIDAsync.rejected,
      (state: CongViecState, action: any) => {}
    );
    //------------search Theo ID -------------
    builder.addCase(
      searchIdTypeAsync.pending,
      (state: CongViecState, action: any) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      searchIdTypeAsync.fulfilled,
      (state: CongViecState, action: PayloadAction<LoaiCongViecModal[]>) => {
        state.arrChiTietLoai = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      searchIdTypeAsync.rejected,
      (state: CongViecState, action: any) => {}
    );
    //------------dsChiTietLoai---------------
    builder.addCase(
      getIdTypeAsync.pending,
      (state: CongViecState, action: any) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      getIdTypeAsync.fulfilled,
      (state: CongViecState, action: PayloadAction<DsChiTietLoai[]>) => {
        state.arrChiTiet = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      getIdTypeAsync.rejected,
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

//-------------------searchIdTypeAsync-------------
export const searchIdTypeAsync = createAsyncThunk(
  "searchIdTypeAsync",
  async (id: number) => {
    try {
      const res = await http.get(
        `cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
      );

      if (res.data.content.length > 0) {
        const firstTenChiTietLoai = res.data.content[0].tenChiTietLoai;

        const mergedData = {
          firstTenChiTietLoai,
          content: res.data.content,
        };

        console.log(mergedData);

        return mergedData;
      }
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);

//-------------------getIdTypeAsync-------------
export const getIdTypeAsync = createAsyncThunk(
  "getIdTypeAsync",
  async (id: number) => {
    try {
      const res = await http.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
      console.log(res.data.content, "ma Chi tiet loai");
      return res.data.content;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
