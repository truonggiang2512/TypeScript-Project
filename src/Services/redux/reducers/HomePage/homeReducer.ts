import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
export interface HomeModel {
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
export interface PageIndex {
  pageIndex: number;
  pageSize: number;
  totalRow: number;
  keywords: string;
  data: Datum[];
}
export interface Datum {
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
export interface HomeState {
  arrAllJob: HomeModel[] | undefined;
  arrPageIndex: PageIndex[];
}
export const initialState: HomeState = {
  arrAllJob: [],
  arrPageIndex: [],
};

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(jobAsynAction.pending, (state: HomeState, action: any) => {})
      .addCase(
        jobAsynAction.fulfilled,
        (state: HomeState, action: PayloadAction<HomeModel[]>) => {
          state.arrAllJob = action.payload;
        }
      )
      .addCase(jobAsynAction.rejected, (state: HomeState, action: any) => {})
      .addCase(
        getJobHomePageAsync.pending,
        (state: HomeState, action: any) => {}
      )
      .addCase(
        getJobHomePageAsync.fulfilled,
        (state: HomeState, action: PayloadAction<PageIndex[]>) => {
          state.arrPageIndex = action.payload;
        }
      )
      .addCase(
        getJobHomePageAsync.rejected,
        (state: HomeState, action: any) => {}
      );
  },
});

export const {} = homeReducer.actions;

export default homeReducer.reducer;

//------------------- create ayscn action--------------
export const jobAsynAction = createAsyncThunk("jobAsynAction", async () => {
  //call api
  const res = await http.get("cong-viec");
  return res.data.content;
});

// ----------------- getJobHomePageAsync------------------
export const getJobHomePageAsync = createAsyncThunk(
  "jobAsyncAction",
  async ({ pageIndex, pageSize, keywords }: PageIndex) => {
    // Use an object to pass parameters
    try {
      // Call the API with query parameters
      const res = await http.get("cong-viec/phan-trang-tim-kiem", {
        params: {
          pageIndex,
          pageSize,
          keywords,
        },
      });

      return res.data.content;
    } catch (error) {
      throw error;
    }
  }
);
