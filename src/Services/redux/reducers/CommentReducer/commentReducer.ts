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
  isLoading: boolean;
}
const initialState: CommentState = {
  arrComment: [],
  arrAddComment: [],
  isLoading: false,
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(commentAsync.pending, (state: CommentState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        commentAsync.fulfilled,
        (state: CommentState, action: PayloadAction<CommentModel[]>) => {
          state.arrComment = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(commentAsync.rejected, (state: CommentState, action: any) => {})
      .addCase(addCommentAsync.pending, (state: CommentState, action: any) => {
        state.isLoading = true;
      })
      .addCase(
        addCommentAsync.fulfilled,
        (state: CommentState, action: PayloadAction<AddCommentModel[]>) => {
          state.arrAddComment = action.payload;
          state.isLoading = false;
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
  async (formComment: AddCommentModel, { dispatch }) => {
    try {
      const res = await http.post("binh-luan", formComment);
      if (res.status === 201) {
        await dispatch(commentAsync(res.data.content.maCongViec));
      }
      return res.data.content;
    } catch (error) {
      throw error;
    }
  }
);
// --------------- deleteCommentAsync-------------
export const deleteCommentAsync = createAsyncThunk(
  "deleteCommentAsync",
  async (maCongViec: number, { dispatch }) => {
    try {
      const res = await http.delete(`binh-luan/${maCongViec}`);
      if (res.status === 201) {
        await dispatch(commentAsync(res.data.content.maCongViec));
      }
      return res.data.content;
    } catch (error) {
      throw error;
    }
  }
);
