import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React, { useState } from "react";
import ModeSelect from "../../Component/ModeSelect";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import { ReactComponent as fiverrLogo } from "../../assets/favicon/fiverr_icon_236762.svg";
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  SvgIcon,
  TextField,
  Typography,
  Menu,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
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
import SearchIcon from "@mui/icons-material/Search";
import BurgerDrawer from "../BurgerDrawer/BurgerDrawer";
export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

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
            border: 1,
            borderColor: "primary.boder",
            borderBottom: 0,
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <ChecklistRtlIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <BurgerDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SvgIcon
                component={fiverrLogo}
                inheritViewBox
                fontSize="small"
                sx={{ color: "primary.main" }}
              />
              <Typography
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  color: "primary.h1",
                }}
              >
                Fiverr
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "block", xs: "none", sm: "none" },
              ml: 3,
              width: 400,
              maxWidth: "100%",
            }}
          >
            <TextField
              type="search"
              fullWidth
              size="small"
              id="search"
              label="What service are you looking for?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Support />
            <Resources />
            <WorkSpace />
            <Button variant="text">Login</Button>
            <ModeSelect />
            {/* <Profile /> */}
            <Button color="success" variant="outlined">
              Join
            </Button>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Button color="success" variant="outlined">
              Join
            </Button>
          </Box>
        </Box>
        <Box
          px={4}
          py={3}
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            width: "100vw",
            justifyContent: "space-between",
          }}
        >
          <TextField
            type="search"
            fullWidth
            size="small"
            id="search"
            label="What service are you looking for?"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          px={4}
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            width: "100vw",
            justifyContent: "space-between",
            border: 1,
            borderColor: "primary.boder",
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
