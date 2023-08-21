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
import { useNavigate } from "react-router-dom";
import storage from "../../../Utils/storage";
import { TOKEN } from "../../../Utils/config";
function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

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
        anchorEl={anchorEl}
        id="account-profile"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            width: 150,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Typography
            variant="subtitle2"
            sx={{ p: 0, width: "100%", textAlign: "left" }}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Typography>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>
          <Typography
            variant="subtitle1"
            onClick={() => {
              storage.clear(TOKEN);
              window.location.pathname = "/home";
            }}
          >
            Log out
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profile;
