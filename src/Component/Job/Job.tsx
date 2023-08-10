import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { HomeModel } from "../../Services/redux/reducers/HomePage/homeReducer";
import { NavLink } from "react-router-dom";
type Props = {
  arrJob: HomeModel;
};
export default function Job({ arrJob }: Props) {
  return (
    <NavLink
      style={{ textDecoration: "none", color: "none" }}
      to={`/detail/${arrJob?.id}`}
    >
      <Box sx={{ color: "primary.main" }}>
        <Box sx={{ Width: 280, boder: "none" }}>
          <Box sx={{ cursor: "pointer" }} onClick={() => {}}>
            <CardMedia
              sx={{
                borderRadius: 2,
                height: { md: "160px", xs: "210px", sm: "160px" },
              }}
              component="img"
              width="100%"
              image={arrJob.hinhAnh}
              alt="green iguana"
            />
            <CardContent sx={{ padding: "10px 0 0 0 " }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                  <Typography variant="subtitle1">Level 10</Typography>
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
                  {arrJob.tenCongViec}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }} py={2}>
                <StarIcon />
                <Typography
                  style={{ display: "inline-block" }}
                  variant="subtitle2"
                >
                  {arrJob.saoCongViec}
                </Typography>
                <Typography
                  style={{
                    display: "inline-block",
                    fontWeight: "300",
                    paddingLeft: "5px",
                  }}
                  variant="subtitle2"
                >
                  ({arrJob.danhGia})
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
                  From US${arrJob.giaTien}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
}
