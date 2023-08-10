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
export interface HomeState {
  arrAllJob: HomeModel[] | undefined;
}
export const initialState: HomeState = {
  arrAllJob: [],
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
      .addCase(jobAsynAction.rejected, (state: HomeState, action: any) => {});
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
