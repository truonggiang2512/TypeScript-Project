import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ItemJobType from "./ItemJobType";
import { useSelector } from "react-redux";
import { RootState } from "../../Services/redux/configStore";
type Props = {};

function JobType({}: Props) {
  const arrChiTiet = useSelector(
    (state: RootState) => state.searchReducer.arrChiTiet
  );
  return (
    <Box py={5}>
      <Box>
        <Box sx={{ px: { md: 7, xs: 0 } }}>
          {arrChiTiet.map((item) => {
            console.log(item.tenLoaiCongViec, "ten");
            return (
              <Box
                sx={{
                  backgroundImage:
                    item.id === 2
                      ? "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/67119574fcb6178f7b270ef6e50d2ff5-1689143593532/Programing.png')"
                      : item.id === 4
                      ? "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c5be9e1ff7a9c16910688aa6b7b5ffee-1688626700100/V_A-%20Desktop%20banner.png')"
                      : item.id === 1
                      ? "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0426b6ab656cedb4697336a530541d50-1688626333573/Digital%20Marketing-%20Desktop%20banner.png')"
                      : item.id === 3
                      ? "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png')"
                      : item.id === 5
                      ? "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6de5a002b40043ab739b6382daf94e37-1688626851418/W_T-%20Desktop%20banner.png')"
                      : "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626492933/M_A-%20Desktop%20banner.png')",

                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "30vh",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              >
                <Box sx={{ textAlign: "center", py: 8 }}>
                  <Typography color="white" variant="h3">
                    {item.tenLoaiCongViec}
                  </Typography>

                  <Typography color="white" variant="subtitle2">
                    Build your brand. Grow your business.
                  </Typography>
                  <Button
                    sx={{
                      mt: 3,
                      color: "white",
                      border: "1px solid white",
                      ":hover": {
                        backgroundColor: "white",
                        color: "#000",
                      },
                    }}
                    startIcon={<PlayCircleOutlineOutlinedIcon />}
                    variant="outlined"
                    size="large"
                  >
                    How Fiverr Works
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ pt: 7, px: { md: 7, xs: 0 } }}>
          <Box>
            {arrChiTiet?.map((item) => (
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: "500", py: 3 }}>
                  Explore {item.tenLoaiCongViec}
                </Typography>
                <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 16 }}>
                  {item.dsNhomChiTietLoai.map((item) => {
                    return (
                      <Grid item xs={4}>
                        <ItemJobType dsNhom={item} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default JobType;
