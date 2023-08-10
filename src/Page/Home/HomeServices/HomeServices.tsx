import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/homeServices.min.css";
import { Box, Container, Typography } from "@mui/material";
export default function HomeServices() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container sx={{ paddingTop: 3 }} maxWidth="xl">
      <Typography pl={3} pb={3} sx={{ fontWeight: "bold" }} variant="h4">
        Popular services
      </Typography>
      <Box className="homeServices-content">
        <Slider {...settings}>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Add talent to AI
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  AI Artis
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/translation-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Go global
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  Translation
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161236/illustration-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Color your dreams
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  Illustration
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Unlock growth online
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  SEO
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Reach more customers
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  Social Media
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Engage your Audience
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  Video Explainer
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Share your message
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  Voice Over
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={3}>
            <Box
              onClick={(event) => {
                console.log("do vip");
              }}
              sx={{
                backgroundImage: `url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161238/book-covers-2x.png')`,
                backgroundPosition: "center",
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "345px",
                overflowX: "auto",
                filter: "brightness(95%)",
                "&:hover": {
                  opacity: "0.9",
                  transition: "all .3s",
                },
              }}
            >
              <Box px={3} pt={1}>
                <Typography sx={{ color: "#fff" }} variant="inherit">
                  Showcase your story
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold" }}
                  variant="h5"
                >
                  Book Covers
                </Typography>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Container>
  );
}
