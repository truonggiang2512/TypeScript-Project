import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commentAsync } from "../../Services/redux/reducers/CommentReducer/commentReducer";
import { DispatchType, RootState } from "../../Services/redux/configStore";

type Props = {};

function Comment({}: Props) {
  const arrComment = useSelector(
    (state: RootState) => state.commentReducer.arrComment
  );
  console.log(arrComment, "comment");
  const params = useParams();
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    const actionAPI = commentAsync(params.jobDetailId);
    dispatch(actionAPI);
  }, [params.jobDetailId]);
  return (
    <Box>
      {arrComment.map((item) => {
        return (
          <Box pt={4}>
            <Box sx={{ borderTop: "1px solid", borderColor: "primary.main" }}>
              <Box py={3}>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.avatar}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">
                      {item.tenNguoiBinhLuan}
                    </Typography>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <StarIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.saoBinhLuan}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>|</Box>
                        <Box>
                          <Typography variant="body1">
                            {item.ngayBinhLuan}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box py={2} pl={3}>
                  <Typography
                    sx={{ color: "primary.main" }}
                    variant="subtitle1"
                  >
                    {item.noiDung}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Comment;
