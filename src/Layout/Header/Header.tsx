import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React from "react";
import ModeSelect from "../../Component/ModeSelect";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import { ReactComponent as fiverrLogo } from "../../assets/favicon/fiverr_icon_236762.svg";
import { Button, SvgIcon, Typography } from "@mui/material";
import WorkSpace from "./Menu/WorkSpace";
import Resources from "./Menu/Resources";
import Support from "./Menu/Support";
import Profile from "./Menu/Profile";
import Graphic from "./BoardBar/Graphics";
import Programming from "./BoardBar/Programming";
import Marketing from "./BoardBar/Maketing";
import Video from "./BoardBar/Video";
import Writting from "./BoardBar/Writting";
import Music from "./BoardBar/Music";
import Business from "./BoardBar/Business";
import Data from "./BoardBar/Data";
import Photography from "./BoardBar/Photography";
import Service from "./BoardBar/Sevices";
export default function Header() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
        }}
      >
        <Box
          px={2}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            justifyContent: "space-between",
            height: (theme: any) => theme.fiverr.header,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ChecklistRtlIcon sx={{ color: "primary.main" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SvgIcon
                component={fiverrLogo}
                inheritViewBox
                fontSize="small"
                sx={{ color: "primary.main" }}
              />
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                Fiverr
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Support />
            <Resources />
            <WorkSpace />
            <Button variant="text">Login</Button>
            <Button variant="outlined">Join</Button>
            <ModeSelect />
            <Profile />
          </Box>
        </Box>
        <Box
          px={4}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            justifyContent: "space-between",
            boxShadow:
              " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Graphic />
          <Programming />
          <Marketing />
          <Video />
          <Writting />
          <Music />
          <Business />
          <Data />
          <Photography />
          <Service />
        </Box>
      </Box>
    </Container>
  );
}
