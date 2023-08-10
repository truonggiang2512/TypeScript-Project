import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/categories.min.css";
import { Box, Button, Container, Typography } from "@mui/material";
import Job from "../../../Component/Job/Job";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
type Props = {
  arrAllJob: [];
};
const renderJob = () => {};
function Categories({ arrAllJob }: Props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Container sx={{ bgcolor: "background.joblist" }} maxWidth="xl">
      <Box className="categories-content">
        <Box>
          <Box py={3}>
            <Button size="large" variant="text" endIcon={<NavigateNextIcon />}>
              <Typography variant="h5"> Continue browsing</Typography>
            </Button>
          </Box>
          <Slider {...settings}>
            {arrAllJob.map((item, key) => {
              return (
                <Box px={2} key={key}>
                  <Job arrJob={item} />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
}

export default Categories;
