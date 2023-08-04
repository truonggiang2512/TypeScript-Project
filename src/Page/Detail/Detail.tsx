import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";
import AuboutSeller from "./AuboutSeller";
import GigDetail from "./GigDetail";
import AvatarSeller from "./AvatarSeller";
import InputCmt from "./InputCmt";
import Gig from "./Gig";

export default function Detail() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Box sx={{ display: { md: "flex", xs: "block" } }}>
        <Box sx={{ width: { md: "70%", xs: "100%" } }}>
          <Box sx={{ width: { md: "80%", xs: "100%" }, pl: { md: 7, xs: 0 } }}>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  onClick={() => {
                    navigate("/home");
                  }}
                  underline="hover"
                  color="inherit"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                </Link>
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/search");
                  }}
                  underline="hover"
                >
                  Graphics & Design
                </Link>
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/search");
                  }}
                  underline="hover"
                >
                  Logo Design
                </Link>
              </Breadcrumbs>
            </div>
            <Box pt={3}>
              <Typography sx={{ fontSize: "28px" }} variant="h3">
                I will do modern minimalist 3d business logo design in 24hours
              </Typography>
            </Box>
            <AvatarSeller />
            <Box>
              <img
                width="100%"
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f4fe9c31591769060069fbc26690b62c-1684267935/JPEG-01%20(16)/do-premium-minimalist-3d-business-logo-design-for-your-brand.jpg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                pb: { md: 0, xs: 4 },
              }}
            >
              <Gig />
            </Box>
            <GigDetail />
            <AuboutSeller />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <InputCmt />
          </Box>
        </Box>
        <Box
          sx={{
            width: { md: "40%", xs: "100%" },
            display: { md: "block", xs: "none" },
          }}
        >
          <Gig />
        </Box>
      </Box>
    </Container>
  );
}
