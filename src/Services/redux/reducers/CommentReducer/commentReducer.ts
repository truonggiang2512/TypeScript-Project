import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../../../Utils/config";
export interface CommentModel {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}
export interface AddCommentModel {
  id: number;
  maCongViec: number;
  maNguoiBinhLuan: number;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
}
export interface CommentState {
  arrComment: CommentModel[];
  arrAddComment: AddCommentModel[];
}
const initialState: CommentState = {
  arrComment: [],
  arrAddComment: [],
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
      .addCase(commentAsync.rejected, (state: CommentState, action: any) => {})
      .addCase(
        addCommentAsync.pending,
        (state: CommentState, action: any) => {}
      )
      .addCase(
        addCommentAsync.fulfilled,
        (state: CommentState, action: PayloadAction<AddCommentModel[]>) => {
          state.arrAddComment = action.payload;
          alert("Binh Luan Thanh Cong");
          location.reload();
        }
      )
      .addCase(
        addCommentAsync.rejected,
        (state: CommentState, action: any) => {}
      );
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

// ------ addCommentAsync---------
export const addCommentAsync = createAsyncThunk(
  "addCommentAsync",
  async (formComment: AddCommentModel) => {
    try {
      const res = await http.post("binh-luan", formComment);
      return res.data.content;
    } catch (error) {
      throw error;
    }
  }
);
