import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  ListItemButton,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import WorkSpace from "../Header/Menu/WorkSpace";
import Resources from "../Header/Menu/Resources";
import Support from "../Header/Menu/Support";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Graphic from "../Header/BoardBar/Graphics";
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
// import Profile from "./Menu/Profile";
interface BurgerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerDrawer: React.FC<BurgerDrawerProps> = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List sx={{ width: 250, backgroundColor: "background.paper" }}>
        <ListItem>
          <Button variant="contained">Join Fiverr</Button>
        </ListItem>
        <ListItem>
          <Button variant="text">Login</Button>
        </ListItem>
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
                <Graphic />
              </ListItemIcon>
            </ListItem>
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
