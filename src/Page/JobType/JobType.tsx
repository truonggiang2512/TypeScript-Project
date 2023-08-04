import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ItemJobType from "./ItemJobType";
type Props = {};

function JobType({}: Props) {
  return (
    <Box py={5}>
      <Box>
        <Box sx={{ px: { md: 7, xs: 0 } }}>
          <Box
            sx={{
              backgroundImage: `url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/67119574fcb6178f7b270ef6e50d2ff5-1689143593532/Programing.png')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "30vh",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography color="white" variant="h3">
                Digital Marketing
              </Typography>
              <Typography color="white" variant="subtitle2">
                Build your brand. Grow your business.
              </Typography>
              <Button
                sx={{
                  mt: 3,
                  color: "white",
                  border: "1px solid white",
                  ":hover": {
                    backgroundColor: "white",
                    color: "#000",
                  },
                }}
                startIcon={<PlayCircleOutlineOutlinedIcon />}
                variant="outlined"
                size="large"
              >
                How Fiverr Works
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ pt: 7, px: { md: 7, xs: 0 } }}>
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "500", py: 3 }}>
              Explore Video & Animation
            </Typography>
            <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 16 }}>
              <Grid item xs={4}>
                <ItemJobType />
              </Grid>
              <Grid item xs={4}>
                <ItemJobType />
              </Grid>
              <Grid item xs={4}>
                <ItemJobType />
              </Grid>
              <Grid item xs={4}>
                <ItemJobType />
              </Grid>
              <Grid item xs={4}>
                <ItemJobType />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default JobType;
