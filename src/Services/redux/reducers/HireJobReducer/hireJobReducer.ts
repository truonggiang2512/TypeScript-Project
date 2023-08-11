import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
import { USER_HIRE } from "../../../../Utils/constant";
import storage from "../../../../Utils/storage";
interface HireModel {
  id: number;
  maCongViec: number;
  maNguoiThue: number;
  ngayThue: string;
  hoanThanh: boolean;
}

interface HireState {
  arrHire: HireModel[];
}
const initialState: HireState = {
  arrHire: [],
};

const hireJobReducer = createSlice({
  name: "hireJobReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(hireAsync.pending, (state: HireState, action: any) => {})
      .addCase(
        hireAsync.fulfilled,
        (state: HireState, action: PayloadAction<HireModel[]>) => {
          state.arrHire = action.payload;
          alert("Ban Da Thue Thanh Cong");
        }
      )
      .addCase(hireAsync.rejected, (state: HireState, action: any) => {});
  },
});

export const {} = hireJobReducer.actions;

export default hireJobReducer.reducer;

//-------------------------hireAysnc--------------
export const hireAsync = createAsyncThunk(
  "hireAysnc",
  async (formHire: HireModel) => {
    try {
      const res = await http.post("thue-cong-viec", formHire);
      storage.set(USER_HIRE, res.data.content);
      return res.data.content;
    } catch (error) {
      throw error;
    }
  }
);
