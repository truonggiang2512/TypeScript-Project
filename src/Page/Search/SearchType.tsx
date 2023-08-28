import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
type Props = {};

function SearchType({}: Props) {
  const arrChiTietLoai = useSelector(
    (state: any) => state.searchReducer.arrChiTietLoai
  );
  console.log(arrChiTietLoai, "arrChiTietLoai");
  return (
    <Container sx={{ py: 5 }} maxWidth="lg">
      <Box sx={{ pb: 2 }}>
        <Typography variant="h2">
          Search For <b>{arrChiTietLoai.firstTenChiTietLoai}</b>
        </Typography>
      </Box>
      <Box my={2}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 16 }}>
          {arrChiTietLoai.content?.map((arrChiTietLoai: any) => {
            return (
              <Grid item xs={4}>
                <NavLink
                  style={{ textDecoration: "none", color: "none" }}
                  to={`/detail/${arrChiTietLoai?.id}`}
                >
                  <Box
                    sx={{ Width: 280, boder: "none", color: "primary.main" }}
                  >
                    <Box sx={{ cursor: "pointer" }}>
                      <CardMedia
                        sx={{
                          borderRadius: 2,
                          height: { md: "160px", xs: "210px", sm: "160px" },
                        }}
                        component="img"
                        width="100%"
                        image={arrChiTietLoai.congViec.hinhAnh}
                        alt="green iguana"
                      />
                      <CardContent sx={{ padding: "10px 0 0 0 " }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Stack direction="row" spacing={1}>
                            <Box>
                              <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 24, height: 24 }}
                              />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography variant="body2">Docute</Typography>
                            </Box>
                          </Stack>
                          <Box>
                            <Typography variant="subtitle1">
                              Level 10
                            </Typography>
                          </Box>
                        </Box>
                        <Box pt={2}>
                          <Typography
                            sx={{
                              overflow: "hidden",
                              display: "-webkit-box",
                              textOverflow: "ellipsis",
                              whiteSpace: "normal",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              msTextOverflow: "ellipsis",
                            }}
                            variant="subtitle1"
                            color="text.main"
                          >
                            {arrChiTietLoai.congViec.tenCongViec}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }} py={2}>
                          <StarIcon />
                          <Typography
                            style={{ display: "inline-block" }}
                            variant="subtitle2"
                          >
                            {arrChiTietLoai.congViec.saoCongViec}
                          </Typography>
                          <Typography
                            style={{
                              display: "inline-block",
                              fontWeight: "300",
                              paddingLeft: "5px",
                            }}
                            variant="subtitle2"
                          >
                            ({arrChiTietLoai.congViec.danhGia})
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            style={{
                              display: "inline-block",
                              fontSize: "16px",
                              fontWeight: "600",
                            }}
                          >
                            From US${arrChiTietLoai.congViec.giaTien}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default SearchType;
