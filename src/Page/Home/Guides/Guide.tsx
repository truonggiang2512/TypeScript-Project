import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function Guide() {
  return (
    <Container maxWidth="xl" disableGutters={false}>
      <Box py={10} px={5}>
        <Typography variant="h3">Guides to help you grow</Typography>
        <Box py={3}>
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sx={{ cursor: "pointer" }}>
              <Box>
                <img
                  width="100%"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_410,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
                  alt=""
                />
                <Box pt={2}>
                  <Typography variant="subtitle2">
                    Start an online business and work from home
                  </Typography>
                  <Typography variant="subtitle1">
                    A complete guide to starting a small business online
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ cursor: "pointer" }}>
              <Box>
                <img
                  width="100%"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_350,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png"
                  alt=""
                />
                <Box pt={2}>
                  <Typography variant="subtitle2">
                    Digital marketing made easy
                  </Typography>
                  <Typography variant="subtitle1">
                    A practical guide to understand what is digital marketing
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ cursor: "pointer" }}>
              <Box>
                <img
                  width="100%"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_350,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png"
                  alt=""
                />
                <Box pt={2}>
                  <Typography variant="subtitle2">
                    Create a logo for your business
                  </Typography>
                  <Typography variant="subtitle1">
                    A step-by-step guide to create a memorable business logo
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
