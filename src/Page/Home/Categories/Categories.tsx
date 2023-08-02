import { Box, Container, Grid, ListItem, Typography } from "@mui/material";
import React from "react";

function Categories() {
  return (
    <Container sx={{ pt: 13 }} maxWidth="xl">
      <Typography variant="h3">You need it, we've got it</Typography>
      <Box sx={{ py: 10 }}>
        <Grid columns={{ md: 20, xs: 8, sm: 12 }} container item spacing={8}>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Graphics & Design</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Digital Marketing</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  Writing & Translation
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Video & Animation</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Music & Audio</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Programming & Tech</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Business</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Lifestyle</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Data</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ cursor: "pointer" }}>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img
                  style={{ height: "48px", width: "48px" }}
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="subtitle1">Photography</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Categories;
