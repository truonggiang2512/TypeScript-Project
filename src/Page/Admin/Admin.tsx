import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../Services/redux/configStore";
import TableUser from "./Table/Table";
import TableJob from "./Table/TableJob";
import TableHire from "./Table/TableHire";
type Props = {};
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
function Admin({}: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [table, setTable] = useState(<TableUser />);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const showUser = () => {
    setTable(<TableUser />);
  };
  const showJob = () => {
    setTable(<TableJob />);
  };

  const showHire = () => {
    setTable(<TableHire />);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", pt: { md: 2, xs: 5 } }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <Box sx={{ pt: { md: 5, xs: 18 } }}>
          <DrawerHeader sx={{ display: "flex", justifyContent: "left", px: 2 }}>
            <Typography variant="subtitle2">Dashboard</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>{" "}
          </DrawerHeader>
          <Divider />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    showUser();
                  }}
                >
                  <ListItemText primary="Quản lý người dùng" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    showJob();
                  }}
                >
                  <ListItemText primary="Quản lý công việc" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    showHire();
                  }}
                >
                  <ListItemText primary="Quản lý dịch vụ" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Main open={open}>
        <Box px={3}>
          <Box sx={{ textAlign: "left" }}>
            <Button
              sx={{ mr: 1, ...(open && { display: "none" }) }}
              startIcon={<MenuIcon />}
              onClick={handleDrawerOpen}
            >
              Open the Drawer
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                px: 4,
                pb: 2,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                justifyContent: "right",
              }}
            >
              <Typography variant="subtitle1"> Admin</Typography>
              <Avatar
                sx={{ height: 32, width: 32 }}
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
            </Box>
          </Box>

          <Box py={4}>{table}</Box>
        </Box>
      </Main>
    </Box>
  );
}

export default Admin;
