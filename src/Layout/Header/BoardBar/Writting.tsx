import Box from "@mui/system/Box";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon, ListItemText, Typography } from "@mui/material";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Writting() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button-writting"
        aria-controls={open ? "basic-menu-writting" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Blog
      </Button>

      <Menu
        id="basic-menu-writting"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-writting",
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Writting;