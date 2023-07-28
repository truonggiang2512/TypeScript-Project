import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

export default function RootTemplate() {
  // useCheckToken()
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ height: "100vh" }}>
      <Header />
      <Box
        sx={{
          paddingTop: "120px",
          height: (theme: any) => theme.fiverr.outlet,
        }}
      >
        <Outlet />
      </Box>
      <Box
        sx={{
          height: (theme: any) => theme.fiverr.footer,
        }}
      >
        <Footer />
      </Box>
    </Container>
  );
}
