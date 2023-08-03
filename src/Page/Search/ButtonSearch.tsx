import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container, Divider, List, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type Props = {};

const ButtonSearch = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box>
        <Button
          id="basic-button-business"
          aria-controls={open ? "basic-menu-business" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<ExpandMoreIcon />}
          variant="outlined"
          size="large"
        >
          Data
        </Button>
      </Box>
      <Menu
        id="basic-menu-business"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            display: "flex",
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button-business",
        }}
      >
        <List sx={{ height: "20vh", px: 4 }}>
          <Box>
            <Box>
              <Button>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Box>
              <Button>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Box>
              <Button>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Box>
              <Button>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
              </Button>
            </Box>
          </Box>
        </List>
      </Menu>
    </div>
  );
};

export default ButtonSearch;
