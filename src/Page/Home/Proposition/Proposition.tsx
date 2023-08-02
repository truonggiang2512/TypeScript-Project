import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
function Proposition() {
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ pt: 14 }}>
      <Box
        sx={{
          padding: "64px 50px",
          bgcolor: "background.proposition",
        }}
      >
        <Box sx={{ display: { md: "flex", xs: "block", sm: "block" } }}>
          <Box
            sx={{
              textAlign: "left",
              width: { xs: "100%", md: "50%" },
            }}
            maxHeight="100%"
          >
            <Box
              sx={{
                width: {
                  md: "75%",
                  xs: "100%",
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                The best part? Everything.
              </Typography>
              <Box>
                <Box pt={3}>
                  <Stack pb={1} direction="row" alignItems="center" gap={1}>
                    <CheckCircleOutlineOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "primary.main" }}
                    />
                    <Typography variant="subtitle2">
                      Stick to your budget
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1">
                    Find the right service for every price point. No hourly
                    rates, just project-based pricing.
                  </Typography>
                </Box>
                <Box pt={3}>
                  <Stack pb={1} direction="row" alignItems="center" gap={1}>
                    <CheckCircleOutlineOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "primary.main" }}
                    />
                    <Typography variant="subtitle2">
                      Get quality work done quickly
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1">
                    Hand your project over to a talented freelancer in minutes,
                    get long-lasting results.
                  </Typography>
                </Box>
                <Box pt={3}>
                  <Stack pb={1} direction="row" alignItems="center" gap={1}>
                    <CheckCircleOutlineOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "primary.main" }}
                    />
                    <Typography variant="subtitle2">
                      Pay when you're happy
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1">
                    Upfront quotes mean no surprises. Payments only get released
                    when you approve.
                  </Typography>
                </Box>
                <Box pt={3}>
                  <Stack pb={1} direction="row" alignItems="center" gap={1}>
                    <CheckCircleOutlineOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "primary.main" }}
                    />
                    <Typography variant="subtitle2">
                      Count on 24/7 support
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1">
                    Our round-the-clock support team is available to help
                    anytime, anywhere.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },

              pt: { md: "100px", xs: "20px" },
            }}
          >
            <Card sx={{ height: "auto" }}>
              <CardMedia
                component="video"
                controls
                image="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" // Replace with your video URL
                poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Proposition;
