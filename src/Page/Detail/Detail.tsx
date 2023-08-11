import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";
import AuboutSeller from "./AuboutSeller";
import GigDetail from "./GigDetail";
import AvatarSeller from "./AvatarSeller";
import InputCmt from "./InputCmt";
import Gig from "./Gig";
import { detailAsyncAPI } from "../../Services/redux/reducers/DetailReducer/detailReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Services/redux/configStore";

export default function Detail() {
  const arrDetail = useSelector(
    (state: RootState) => state.detailReducer.arrDetail
  );

  const params = useParams();
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    const actionAPI = detailAsyncAPI(params.jobDetailId);
    dispatch(actionAPI);
  }, [params.jobDetailId]);
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Box sx={{ display: { md: "flex", xs: "block" } }}>
        <Box sx={{ width: { md: "70%", xs: "100%" } }}>
          <Box sx={{ width: { md: "80%", xs: "100%" }, pl: { md: 7, xs: 0 } }}>
            {arrDetail.map((item) => {
              return (
                <Box>
                  <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link
                        onClick={() => {
                          navigate("/home");
                        }}
                        underline="hover"
                        color="inherit"
                      >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                      </Link>
                      <Link
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate("/search");
                        }}
                        underline="hover"
                      >
                        {item.tenLoaiCongViec}
                      </Link>
                      <Link
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate("/search");
                        }}
                        underline="hover"
                      >
                        {item.tenNhomChiTietLoai}
                      </Link>
                    </Breadcrumbs>
                  </div>
                  <Box pt={3}>
                    <Typography sx={{ fontSize: "28px" }} variant="h3">
                      {item.congViec.tenCongViec}
                    </Typography>
                  </Box>

                  <AvatarSeller arrDetail={item} />
                  <Box>
                    <img width="100%" src={item.congViec.hinhAnh} alt="" />
                  </Box>
                </Box>
              );
            })}
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                pb: { md: 0, xs: 4 },
              }}
            >
              <Gig arrDetail={arrDetail} />
            </Box>
            <GigDetail arrDetail={arrDetail} />
            <AuboutSeller arrDetail={arrDetail} />
            <Comment />
            <Box py={3}>
              <Box pb={2}>
                <Typography variant="subtitle2">Add a comment</Typography>
              </Box>
              <InputCmt arrDetail={arrDetail} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { md: "40%", xs: "100%" },
            display: { md: "block", xs: "none" },
          }}
        >
          <Gig arrDetail={arrDetail} />
        </Box>
      </Box>
    </Container>
  );
}
