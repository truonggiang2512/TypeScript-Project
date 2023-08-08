import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export interface JobModel {
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
export interface JobState {
  arrJob: JobModel[];
}
const initialState: JobState = {
  arrJob: [],
};

const congViecReducer = createSlice({
  name: "congViecReducer",
  initialState,
  reducers: {},
});

export const {} = congViecReducer.actions;

export default congViecReducer.reducer;
