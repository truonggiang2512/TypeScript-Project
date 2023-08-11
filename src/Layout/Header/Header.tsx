import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import ModeSelect from "../../Component/ModeSelect";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
// import { ReactComponent as fiverrLogo } from "../../assets/favicon/fiverr_icon_236762.svg";
import {
  Button,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import WorkSpace from "./Menu/WorkSpace";
import Resources from "./Menu/Resources";
import Support from "./Menu/Support";
import Graphic from "./BoardBar/Graphics";
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
        <Button
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </Button>
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
  useEffect(() => {}, []);
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          backgroundColor: "background.paper",
          zIndex: "99",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SvgIcon
                // component={fiverrLogo}
                inheritViewBox
                fontSize="small"
                sx={{ color: "primary.main" }}
              />
              <Typography
                onClick={() => {
                  navigate("/home");
                }}
                sx={{
                  fontSize: "1.7rem",
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
                  width: 400,
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
            <Support />
            <Resources />
            <WorkSpace />
            <ModeSelect />
            {isDisableLogin()}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Register />
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
          py={0.3}
          sx={{
            display: { md: "block", xs: "none" },
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
