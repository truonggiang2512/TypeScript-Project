import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

export default function RootTemplate() {
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ height: "100vh" }}>
      <Header />
      <Box
        sx={{
          paddingTop: { md: "100px", xs: "160px", sm: "160px" },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
