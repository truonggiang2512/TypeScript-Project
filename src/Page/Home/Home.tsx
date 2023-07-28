import { Box } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ backgroundColor: "primary.light" }}>Home</Box>
      <button
        style={{ color: "red" }}
        onClick={() => {
          navigate("admin");
        }}
      >
        admin
      </button>
    </div>
  );
}
