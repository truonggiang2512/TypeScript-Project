import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../Services/redux/configStore";
import {
  addCommentAsync,
  AddCommentModel,
} from "../../Services/redux/reducers/CommentReducer/commentReducer";
import { DetailModel } from "../../Services/redux/reducers/DetailReducer/detailReducer";
import { USER_LOGIN } from "../../Utils/constant";
import storage from "../../Utils/storage";

type Props = { arrDetail: DetailModel[] };

function InputCmt({ arrDetail }: Props) {
  let commentData: AddCommentModel = {
    id: 0,
    maCongViec: 0,
    maNguoiBinhLuan: 0,
    ngayBinhLuan: "",
    noiDung: "",
    saoBinhLuan: 0,
  };
  let date = new Date().toLocaleDateString();
  const user = storage.get(USER_LOGIN);

  const handleInputChange = (fieldName: string, value: string) => {
    commentData = {
      ...commentData,
      [fieldName]: value,
    };
  };
  const dispatch: DispatchType = useDispatch();
  return (
    <Box>
      {arrDetail.map((item) => {
        console.log(item, "cc");
        return (
          <form>
            <TextField
              fullWidth
              id="noiDung"
              name="noiDung"
              label="Add comment"
              placeholder="Placeholder"
              multiline
              onChange={(e) => handleInputChange("noiDung", e.target.value)}
            />
            <Box py={3}>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  const newComment = {
                    ...commentData,
                    id: item.congViec.maChiTietLoaiCongViec,
                    maCongViec: item.id,
                    maNguoiBinhLuan: user.user.id,
                    ngayBinhLuan: date,
                    saoBinhLuan: 5,
                  };
                  const actionAPI = addCommentAsync(newComment);
                  dispatch(actionAPI);
                }}
              >
                Add comment
              </Button>
            </Box>
          </form>
        );
      })}
    </Box>
  );
}

export default InputCmt;
