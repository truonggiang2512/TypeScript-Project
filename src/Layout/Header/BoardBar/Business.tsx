import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Business() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  if (windowWidth >= 900) {
    return (
      <Box>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          Business
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          <List sx={{ maxHeight: "100vh", width: "100vw" }}>
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
            </Box>
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
            </Box>
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "primary.main", fontWeight: "bold" }}>
                  Website Development
                </Typography>
                <Box>
                  <Button> Logo Design</Button>
                </Box>
                <Box>
                  <Button>Brand Style Guides</Button>
                </Box>
                <Box>
                  <Button>Business Cards & Stationery</Button>
                </Box>
                <Box>
                  <Button> Fonts & Typography</Button>
                </Box>
              </Box>
            </Box>
          </List>
        </Menu>
      </Box>
    );
  } else {
    return (
      <Box width="200px">
        <Accordion
          sx={{
            boxShadow: "none",
            color: "primary.main",
          }}
          expanded={expanded}
          onChange={handleAccordionChange}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ color: "primary.main" }}>Business</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Logo Design
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Brand Style Guides
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>Game Art</Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Graphics for Streamers
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Business Cards & Stationery
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Website Design
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  App Design
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  UX Design
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Landing Page Design
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionDetails>
                <Typography sx={{ color: "primary.main" }}>
                  Resume Design
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }
}

export default Business;
