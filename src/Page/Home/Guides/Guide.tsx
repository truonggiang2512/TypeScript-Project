import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function Guide() {
  return (
    <Container maxWidth="xl" sx={{ height: "70vh" }} disableGutters={false}>
      <Box py={10} px={5}>
        <Typography variant="h3">Guides to help you grow</Typography>
        <Box>
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4}>
              <Box>
                <img
                  width="100%"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_410,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
                  alt=""
                />
                <Box>
                  <Typography variant="subtitle2">
                    Start an online business and work from home
                  </Typography>
                  <Typography variant="subtitle1">
                    A complete guide to starting a small business online
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <img
                  width="100%"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_410,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
                  alt=""
                />
                <Box>
                  <Typography variant="subtitle2">
                    Start an online business and work from home
                  </Typography>
                  <Typography variant="subtitle1">
                    A complete guide to starting a small business online
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <img
                  width="100%"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_410,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
                  alt=""
                />
                <Box>
                  <Typography variant="subtitle2">
                    Start an online business and work from home
                  </Typography>
                  <Typography variant="subtitle1">
                    A complete guide to starting a small business online
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Guide;
