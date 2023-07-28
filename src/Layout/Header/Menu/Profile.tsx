import Box from "@mui/system/Box";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
function Profile() {
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
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/361344934_1100760674218876_329432079406950113_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jaRnAGDKEZcAX973Gjd&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfB54hg0gRIiuIO__nVoz8IqICjiftDdc_b2Q3gRRhLq8A&oe=64C83E0A"
          />
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu-Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-resources",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 29, height: 29, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 29, height: 29, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profile;
