import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LoopIcon from "@mui/icons-material/Loop";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DetailModel } from "../../Services/redux/reducers/DetailReducer/detailReducer";
import { render } from "react-dom";
type Props = {
  arrDetail: DetailModel[];
};
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
function Gig({ arrDetail }: Props) {
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
                border: "1px solid ",
                borderColor: "divider",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ px: { md: 5, sm: 12, xs: 3.5 }, borderRight: 1 }}
                  label="Basic"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ px: { md: 5, sm: 12, xs: 3.5 }, borderRight: 1 }}
                  label="Standard"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ px: { md: 5, sm: 12, xs: 3.5 } }}
                  label="Predium"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <Box height="60vh">
              <CustomTabPanel value={value} index={0}>
                {arrDetail?.map((item) => {
                  return (
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="subtitle2">Most Basic</Typography>
                        <Typography variant="subtitle1">
                          US${item.congViec.giaTien}
                        </Typography>
                      </Box>
                      <Box py={3}>
                        <Typography color="primary.main" variant="subtitle1">
                          1 TEXT logo Concept only+ PNG, JPEG + No object or
                          drawing
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <AccessTimeIcon />
                          <Typography variant="body2">
                            2 Days Delivery
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <LoopIcon />
                          <Typography variant="body2">
                            2 Days Delivery
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <li>{item.congViec.moTaNgan}</li>
                      </Box>
                      <Box pt={3}>
                        <Button
                          sx={{ width: "100%" }}
                          endIcon={<ArrowForwardIcon />}
                          variant="contained"
                        >
                          Continute (${item.congViec.giaTien})
                        </Button>
                      </Box>
                      <Box pt={2} sx={{ textAlign: "center" }}>
                        <Button variant="text">Compare packages</Button>
                      </Box>
                    </Box>
                  );
                })}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {arrDetail?.map((item) => {
                  return (
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="subtitle2">Most Basic</Typography>
                        <Typography variant="subtitle1">
                          US${item.congViec.giaTien * 1.5}
                        </Typography>
                      </Box>
                      <Box py={3}>
                        <Typography color="primary.main" variant="subtitle1">
                          1 TEXT logo Concept only+ PNG, JPEG + No object or
                          drawing
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <AccessTimeIcon />
                          <Typography variant="body2">
                            2 Days Delivery
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <LoopIcon />
                          <Typography variant="body2">
                            2 Days Delivery
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <li>{item.congViec.moTaNgan}</li>
                      </Box>
                      <Box pt={3}>
                        <Button
                          sx={{ width: "100%" }}
                          endIcon={<ArrowForwardIcon />}
                          variant="contained"
                        >
                          Continute (${item.congViec.giaTien * 1.5})
                        </Button>
                      </Box>
                      <Box pt={2} sx={{ textAlign: "center" }}>
                        <Button variant="text">Compare packages</Button>
                      </Box>
                    </Box>
                  );
                })}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {arrDetail?.map((item) => {
                  return (
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="subtitle2">Most Basic</Typography>
                        <Typography variant="subtitle1">
                          US${item.congViec.giaTien * 2}
                        </Typography>
                      </Box>
                      <Box py={3}>
                        <Typography color="primary.main" variant="subtitle1">
                          1 TEXT logo Concept only+ PNG, JPEG + No object or
                          drawing
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <AccessTimeIcon />
                          <Typography variant="body2">
                            2 Days Delivery
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <LoopIcon />
                          <Typography variant="body2">
                            2 Days Delivery
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <li>{item.congViec.moTaNgan}</li>
                      </Box>
                      <Box pt={3}>
                        <Button
                          sx={{ width: "100%" }}
                          endIcon={<ArrowForwardIcon />}
                          variant="contained"
                        >
                          Continute (${item.congViec.giaTien * 2})
                        </Button>
                      </Box>
                      <Box pt={2} sx={{ textAlign: "center" }}>
                        <Button variant="text">Compare packages</Button>
                      </Box>
                    </Box>
                  );
                })}
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Gig;
