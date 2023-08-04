import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AvatarSeller from "./AvatarSeller";

type Props = {};

function AuboutSeller({}: Props) {
  return (
    <div>
      <AvatarSeller />
      <Box
        sx={{
          border: "1px solid ",
          borderColor: "primary.main",
        }}
      >
        <Box px={3} py={3}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 8 }}>
            <Grid item xs={4}>
              <Box>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  From
                </Typography>
                <Typography variant="subtitle2">Pakistan</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  Member since
                </Typography>
                <Typography variant="subtitle2">Jun 2022</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  Avg. response time
                </Typography>
                <Typography variant="subtitle2">1 hour</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  Languages
                </Typography>
                <Typography variant="subtitle2">
                  English, Spanish, French
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Typography>From</Typography>
                <Typography variant="subtitle2">Pakistan</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            mt={2}
            py={2}
            sx={{
              borderTop: "1px solid ",
              borderColor: "primary.main",
            }}
          >
            <Typography sx={{ color: "primary.main" }} variant="subtitle1">
              I am enthusiastic about my work. My work is my passion and i do
              all designs by heart. I will offer all type of logo designs and
              illustrations at same time. Place my gig and get the elite designs
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AuboutSeller;
