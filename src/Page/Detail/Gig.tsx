import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LoopIcon from "@mui/icons-material/Loop";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
type Props = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Gig({}: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: { md: "sticky", xs: "none" },
        top: 160,
        pr: { md: 7, xs: 0 },
      }}
    >
      <Box>
        <Box sx={{ display: "flex", gap: 1, justifyContent: "right" }}>
          <FavoriteBorderIcon />
          <TurnedInNotIcon />
          <ShareIcon />
        </Box>
        <Box
          sx={{
            pt: 3,
          }}
        >
          <Box
            sx={{
              width: { md: "94%", xs: "100%" },
              border: "1px solid ",
              borderColor: "primary.main",
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                display: "flex",
                justifyContent: { md: "right", xs: "center" },
                borderColor: "divider",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ px: 5, borderRight: 1 }}
                  label="Basic"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ px: 5, borderRight: 1 }}
                  label="Standard"
                  {...a11yProps(1)}
                />
                <Tab sx={{ px: 5 }} label="Predium" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <Box height="60vh">
              <CustomTabPanel value={value} index={0}>
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="subtitle2">Most Basic</Typography>
                    <Typography variant="subtitle1">US$15</Typography>
                  </Box>
                  <Box py={3}>
                    <Typography color="primary.main" variant="subtitle1">
                      1 TEXT logo Concept only+ PNG, JPEG + No object or drawing
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AccessTimeIcon />
                      <Typography variant="body2">2 Days Delivery</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <LoopIcon />
                      <Typography variant="body2">2 Days Delivery</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <ul>
                      <li>docute</li>
                      <li>dovippro</li>
                      <li>doiuHaTram</li>
                      <li>TruongDo</li>
                      <li>Hi</li>
                    </ul>
                  </Box>
                  <Box pt={3}>
                    <Button
                      sx={{ width: "100%" }}
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                    >
                      Continute
                    </Button>
                  </Box>
                  <Box pt={2} sx={{ textAlign: "center" }}>
                    <Button variant="text">Compare packages</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="subtitle2">Recommemded</Typography>
                    <Typography variant="subtitle1">US$30</Typography>
                  </Box>
                  <Box py={3}>
                    <Typography color="primary.main" variant="subtitle1">
                      2 Proper Logo Concepts + JPG, Transparent PNG, and Source
                      ai files for Chosen Option
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AccessTimeIcon />
                      <Typography variant="body2">2 Days Delivery</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <LoopIcon />
                      <Typography variant="body2">2 Days Delivery</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <ul>
                      <li>dododo</li>
                      <li>Truong Giang 123</li>
                      <li>Do vip 456</li>
                      <li>Hi</li>
                      <li>Cec</li>
                    </ul>
                  </Box>
                  <Box pt={3}>
                    <Button
                      sx={{ width: "100%" }}
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                    >
                      Continute
                    </Button>
                  </Box>
                  <Box pt={2} sx={{ textAlign: "center" }}>
                    <Button variant="text">Compare packages</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="subtitle2">VIP</Typography>
                    <Typography variant="subtitle1">US$50</Typography>
                  </Box>
                  <Box py={3}>
                    <Typography color="primary.main" variant="subtitle1">
                      3 Detailed Premium Logo Concepts, All files, Social Media
                      Kit & VIP Priority support
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AccessTimeIcon />
                      <Typography variant="body2">2 Days Delivery</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <LoopIcon />
                      <Typography variant="body2">2 Days Delivery</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <ul>
                      <li>docute</li>
                      <li>dovippro</li>
                      <li>doiuHaTram</li>
                      <li>TruongDo</li>
                      <li>Hi</li>
                    </ul>
                  </Box>
                  <Box pt={3}>
                    <Button
                      sx={{ width: "100%" }}
                      endIcon={<ArrowForwardIcon />}
                      variant="contained"
                    >
                      Continute
                    </Button>
                  </Box>
                  <Box pt={2} sx={{ textAlign: "center" }}>
                    <Button variant="text">Compare packages</Button>
                  </Box>
                </Box>
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Gig;
