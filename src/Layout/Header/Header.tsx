import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React from "react";
import ModeSelect from "../../Component/ModeSelect";

export default function Header() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "primary.main",
          position: "fixed",
          width: "100vw",
          height: (theme: any) => theme.fiverr.header,
        }}
      >
        <Box> AppBar</Box>
        <ModeSelect />
      </Box>
    </Container>
  );
}
