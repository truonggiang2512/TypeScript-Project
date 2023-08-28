import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import Resources from "../Header/Menu/Resources";
import Support from "../Header/Menu/Support";
import Typography from "@mui/material/Typography";
import Programming from "../Header/BoardBar/Programming";
import Marketing from "../Header/BoardBar/Maketing";
import Video from "../Header/BoardBar/Video";
import Music from "../Header/BoardBar/Music";
import Business from "../Header/BoardBar/Business";
import Photography from "../Header/BoardBar/Photography";
import Service from "../Header/BoardBar/Sevices";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ModeSelect from "../../Component/ModeSelect";
import storage from "../../Utils/storage";
import { TOKEN } from "../../Utils/config";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
interface BurgerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerDrawer: React.FC<BurgerDrawerProps> = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };
  const token = storage.get(TOKEN);
  const isDisableLoginMb: any = () => {
    if (token) {
      return (
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              onClick={() => {
                navigate("/profile");
              }}
              src=""
            ></Avatar>
          </Box>
          <Box>Welcomback</Box>
        </Box>
      );
    } else {
      return <Box></Box>;
    }
  };
  return (
    <Drawer sx={{ zIndex: 10000 }} anchor="left" open={isOpen}>
      <Box sx={{ cursor: "pointer", textAlign: "right", pt: 3, pr: 3 }}>
        <CloseIcon onClick={onClose} />
      </Box>
      <List sx={{ width: 250, backgroundColor: "background.paper" }}>
        <ListItem>{isDisableLoginMb()}</ListItem>

        <ListItemButton onClick={handleClick}>
          <ListItemText
            sx={{ color: "primary.main" }}
            primary="Browser Categories"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Programming />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Marketing />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Video />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Music />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Business />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Photography />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <Service />
              </ListItemIcon>
            </ListItem>
          </List>
        </Collapse>
        <ListItem>
          <Typography sx={{ color: "primary.main" }} variant="subtitle2">
            General
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List sx={{ backgroundColor: "background.paper" }}>
        <ListItem>
          <ListItemIcon>
            <Resources />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Support />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ModeSelect />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default BurgerDrawer;
