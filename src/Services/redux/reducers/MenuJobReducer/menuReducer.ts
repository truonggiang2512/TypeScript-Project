import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";

export interface MenuModel {
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
export interface MenuState {
  arrMenu: MenuModel[];
  isLoading: boolean;
}
const initialState: MenuState = {
  arrMenu: [],
  isLoading: false,
};

const menuReducer = createSlice({
  name: "menuReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(menuAsync.pending, (state: MenuState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        menuAsync.fulfilled,
        (state: MenuState, action: PayloadAction<MenuModel[]>) => {
          state.arrMenu = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(menuAsync.rejected, (state: MenuState, action: any) => {});
  },
});

export const {} = menuReducer.actions;

export default menuReducer.reducer;

//-------------------------asyncAPI-----------------------
export const menuAsync = createAsyncThunk("meunuAsync", async () => {
  try {
    const res = await http.get("cong-viec/lay-menu-loai-cong-viec");
    return res.data.content;
  } catch (error) {
    console.error("Error during fetching jobs:", error);
    throw error;
  }
});
