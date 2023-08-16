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
export interface GetHireModel {
  id: number;
  ngayThue: string;
  hoanThanh: boolean;
  congViec: CongViec;
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

export interface ProfileState {
  arrProfile: ProfileModel[];
  arrHire: GetHireModel[];
}

const initialState: ProfileState = {
  arrProfile: [],
  arrHire: [],
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
      )
      .addCase(getHireAsync.pending, (state: ProfileState, action: any) => {})
      .addCase(
        getHireAsync.fulfilled,
        (state: ProfileState, action: PayloadAction<GetHireModel[]>) => {
          state.arrHire = action.payload;
        }
      )
      .addCase(getHireAsync.rejected, (state: ProfileState, action: any) => {})
      .addCase(
        deleteJobAsyncAPI.pending,
        (state: ProfileState, action: any) => {}
      )
      .addCase(
        deleteJobAsyncAPI.fulfilled,
        (state: ProfileState, action: PayloadAction<GetHireModel[]>) => {
          alert("Xoa Thanh Cong");
        }
      )
      .addCase(
        deleteJobAsyncAPI.rejected,
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

//-----------------getHireAPI--------------
export const getHireAsync = createAsyncThunk("getHireAsync", async () => {
  //call api
  try {
    // Call API
    const res = await http.get("thue-cong-viec/lay-danh-sach-da-thue");
    return res.data.content || []; // Trả về mảng, hoặc mảng rỗng nếu không có dữ liệu
  } catch (error) {
    console.error("Error during fetching jobs:", error);
    throw error; // Ném lỗi để createAsyncThunk xử lý
  }
});

//---------- deleteJobAsync-----------
export const deleteJobAsyncAPI = createAsyncThunk(
  "deleteJobAsyncAPI",
  async (id: number, { dispatch }) => {
    if (window.confirm("Do you want to remove?")) {
      const res = await http.delete(`thue-cong-viec/${id}`);

      if (res.status === 200) {
        await dispatch(getHireAsync());
      } else {
        return;
      }
    }
  }
);
