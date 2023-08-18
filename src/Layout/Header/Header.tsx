import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import ModeSelect from "../../Component/ModeSelect";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import {
  Button,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Graphic from "./BoardBar/MenuJob/Graphics";
import SearchIcon from "@mui/icons-material/Search";
import BurgerDrawer from "../BurgerDrawer/BurgerDrawer";
import Register from "../../Page/Auth/Register/Register";
import { useNavigate } from "react-router-dom";
import Login from "../../Page/Auth/Login/Login";
import storage from "../../Utils/storage";
import { TOKEN } from "../../Utils/config";
import { searchJobAsync } from "../../Services/redux/searchReducer/searchReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType } from "../../Services/redux/configStore";
import Profile from "./Menu/Profile";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { USER_LOGIN } from "../../Utils/constant";
export default function Header() {
  const token = storage.get(TOKEN);
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const arrSearch = useSelector((state: any) => state.searchReducer.arrSearch);
  const submitSearch = (event: any) => {
    event.preventDefault();
    let value = event.target.search.value;
    const actionApiSearch = searchJobAsync(value);
    dispatch(actionApiSearch);
    navigate("/search");
  };
  const isDisableLogin: any = () => {
    if (token) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Tooltip title="Notification">
              <IconButton>
                <NotificationsNoneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Messages">
              <IconButton>
                <MailOutlineIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Lists">
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Profile />
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex" }}>
          <Login />
          <Register />
        </Box>
      );
    }
  };
  const isDisableLoginMb: any = () => {
    if (token) {
      return (
        <Box>
          <Profile />
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex" }}>
          <Login />
          <Register />
        </Box>
      );
    }
  };
  const isAdmin = storage.get(USER_LOGIN);
  useEffect(() => {}, []);
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          backgroundColor: "background.paper",
          zIndex: (theme) => theme.zIndex.drawer + 30,
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
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              alignItems: "center",
              gap: { md: 2, xs: 0 },
            }}
          >
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                alignItems: "center",
                gap: { md: 0.5, xs: 0 },
              }}
            >
              <Typography
                onClick={() => {
                  navigate("/home");
                }}
                sx={{
                  fontSize: "2.0rem",
                  fontWeight: "bold",
                  color: "primary.main",
                  cursor: "pointer",
                }}
              >
                Fiverr
              </Typography>
              <Box
                sx={{
                  display: { md: "block", xs: "none", sm: "none" },
                  ml: 3,
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <form action="" onSubmit={submitSearch}>
                  <TextField
                    type="search"
                    fullWidth
                    size="small"
                    name="search"
                    id="search"
                    label="What service are you looking for?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button type="submit" sx={{ p: 0, m: 0 }}>
                            <SearchIcon />
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {isAdmin?.user.role === "ADMIN" ? (
              <Button
                onClick={() => {
                  navigate("/admin");
                }}
              >
                Admin
              </Button>
            ) : (
              <Box></Box>
            )}

            <ModeSelect />
            {isDisableLogin()}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {isDisableLoginMb()}
          </Box>
        </Box>
        <form action="" onSubmit={submitSearch}>
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
        </form>
        <Box
          px={4}
          py={0.3}
          sx={{
            alignItems: "center",
            width: "100vw",
            border: 1,
            borderColor: "#212121",
          }}
        >
          <Graphic />
        </Box>
      </Box>
    </Container>
  );
}
