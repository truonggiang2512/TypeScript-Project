import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
export interface CommentModel {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}
export interface CommentState {
  arrComment: CommentModel[];
}
const initialState: CommentState = {
  arrComment: [],
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(commentAsync.pending, (state: CommentState, action: any) => {})
      .addCase(
        commentAsync.fulfilled,
        (state: CommentState, action: PayloadAction<CommentModel[]>) => {
          state.arrComment = action.payload;
        }
      )
      .addCase(commentAsync.rejected, (state: CommentState, action: any) => {});
  },
});

export const {} = commentReducer.actions;

export default commentReducer.reducer;

//------------------------ AsyncAPI----------------
export const commentAsync = createAsyncThunk(
  "commentAsync",
  async (id: any) => {
    try {
      const res = await http.get(
        `binh-luan/lay-binh-luan-theo-cong-viec/${id}`
      );
      return res.data.content;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
