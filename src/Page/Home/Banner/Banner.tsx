import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

type Props = {};

export const Banner = (props: Props) => {
  return (
    <Container sx={{ pb: 2 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url("https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608134/bg-signup-1160-x2.png")`,
          height: "300px",
        }}
      >
        <Box py={10} px={4}>
          <Typography sx={{ color: "white" }} variant="h1">
            Suddenly it's all so <i>doable</i>.
          </Typography>
          <Box pt={5}>
            <Button
              sx={{ backgroundColor: "#1cbf73", color: "white" }}
              variant="contained"
            >
              Join Fiverr
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "62%",
            marginLeft: "10px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608134/bg-signup-1160-x2.png"
            alt=""
          />
        </Box>
      </Box>
    </Container>
  );
};
