import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

export default function RootTemplate() {
  // useCheckToken()
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ height: "100vh", backgroundColor: "primary.light" }}
    >
      <Header />
      <Box
        sx={{
          paddingTop: "60px",
          backgroundColor: "primary.A100",
          height: (theme: any) => theme.fiverr.outlet,
        }}
      >
        <Outlet />
      </Box>
      <Box
        sx={{
          height: (theme: any) => theme.fiverr.footer,
          backgroundColor: "primary.dark",
        }}
      >
        <Footer />
      </Box>
    </Container>
  );
}
