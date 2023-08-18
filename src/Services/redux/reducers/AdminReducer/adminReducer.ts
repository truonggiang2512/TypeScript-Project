import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { useDispatch } from "react-redux";
import { http } from "../../../../Utils/config";
import { DispatchType } from "../../configStore";
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
  isLoading: boolean;
}
const initialState = {
  arrUser: [],
  arrJob: [],
  arrJobType: [],
  arrHire: [],
  isLoading: false,
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      //-----------------------Get all User-----------------------
      .addCase(getUserAsync.pending, (state: ContentState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        getUserAsync.fulfilled,
        (state: ContentState, action: PayloadAction<User[]>) => {
          state.arrUser = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getUserAsync.rejected, (state: ContentState, action: any) => {})
      //--------------------- get All Job-----------------------
      .addCase(getJobAsync.pending, (state: ContentState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        getJobAsync.fulfilled,
        (state: ContentState, action: PayloadAction<Job[]>) => {
          state.arrJob = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getJobAsync.rejected, (state: ContentState, action: any) => {})
      //----------------------Get Type of Job-----------------------
      // .addCase(getJobTypeAsync.pending, (state: ContentState, action: any) => {
      //   // state.isLoading = true;
      // })
      // .addCase(
      //   getJobTypeAsync.fulfilled,
      //   (state: ContentState, action: PayloadAction<JobType[]>) => {
      //     state.arrJobType = action.payload;
      //     // state.isLoading = false;
      //   }
      // )
      // .addCase(
      //   getJobTypeAsync.rejected,
      //   (state: ContentState, action: any) => {}
      // )
      //-----------------------Hire Job-----------------------
      .addCase(getJobHireAsync.pending, (state: ContentState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        getJobHireAsync.fulfilled,
        (state: ContentState, action: PayloadAction<HireJob[]>) => {
          state.arrHire = action.payload;
          state.isLoading = false;
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
// export const getJobTypeAsync = createAsyncThunk("getJobTypeAsync", async () => {
//   try {
//     const res = await http.get("loai-cong-viec");
//     return res.data.content;
//   } catch (error) {
//     throw error;
//   }
// });
//--------------getJobHireAsync-----------
export const getJobHireAsync = createAsyncThunk("getJobHireAsync", async () => {
  try {
    const res = await http.get("thue-cong-viec");
    console.log(res);
    return res.data.content;
  } catch (error) {
    throw error;
  }
});

//-----------------DELETE-----------------
//--------------deleteUserAsync-----------
export const deleteUserAsync = createAsyncThunk(
  "deleteUserAsync",
  async (id: any, { dispatch }) => {
    if (window.confirm("Do you want to remove?")) {
      const res = await http.delete(`users?id=${id}`);
      if (res.status === 200) {
        await dispatch(getUserAsync());
        console.log("isSuccess");
      } else {
        return;
      }
    }
  }
);

//--------------deleteJobAsync-----------
export const deleteJobAsync = createAsyncThunk(
  "deleteJobAsync",
  async (id: number, { dispatch }) => {
    if (window.confirm("Do you want to remove?")) {
      const res = await http.delete(`cong-viec/${id}`);
      if (res.status === 200) {
        await dispatch(getJobAsync());
      } else {
        return;
      }
    }
  }
);

//--------------deleteJobTypeAsync-----------
// export const deleteJobTypeAsync = createAsyncThunk(
//   "deleteJobTypeAsync",
//   async (id: number, { dispatch }) => {
//     if (window.confirm("Do you want to remove?")) {
//       const res = await http.delete(`loai-cong-viec/${id}`);

//       if (res.status === 200) {
//         await dispatch(getJobTypeAsync());
//       } else {
//         return;
//       }
//     }
//   }
// );
//--------------deleteJobHireAsync-----------
export const deleteJobHireAsync = createAsyncThunk(
  "deleteJobHireAsync",
  async (id: number, { dispatch }) => {
    if (window.confirm("Do you want to remove?")) {
      const res = await http.delete(`thue-cong-viec/${id}`);

      if (res.status === 200) {
        await dispatch(getJobHireAsync());
      } else {
        return;
      }
    }
  }
);

//-----------------UPDATE----------------
export const updateUserAsync = createAsyncThunk(
  "updateUserAsync",
  async (model: User, { dispatch }) => {
    try {
      const res = await http.put(`users/${model.id}`, model);
      if (res.status === 200) {
        await dispatch(getUserAsync());
        alert("Update successful");
      }
    } catch (error) {}
  }
);
//----------------updateJobHireAsync---------------
export const updateJobHireAsync = createAsyncThunk(
  "deleteJobHireAsync",
  async (model: HireJob, { dispatch }) => {
    if (window.confirm("Do you want to remove?")) {
      const res = await http.put(`thue-cong-viec/${model.id}`, model);

      if (res.status === 200) {
        await dispatch(getJobHireAsync());
        alert("Update successful");
      } else {
        return;
      }
    }
  }
);
