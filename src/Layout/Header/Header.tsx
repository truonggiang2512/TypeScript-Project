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
          justifyContent: "space-around",
          height: (theme: any) => theme.fiverr.header,
        }}
      >
        <Box>
          <img src="../../assets/favicon/fiverr-svgrepo-com.svg" />
        </Box>
        <Box>
          <ModeSelect />
        </Box>
      </Box>
      <div></div>
    </Container>
  );
}
