import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/jobList.min.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PageviewIcon from "@mui/icons-material/Pageview";
export default function Joblist() {
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
    <Container sx={{ bgcolor: "background.joblist", py: 12 }} maxWidth="xl">
      <Typography pl={3} pb={3} sx={{ fontWeight: "bold" }} variant="h4">
        Inspiring work made on Fiverr
      </Typography>
      <Box className="jobList-content">
        <Slider {...settings}>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">Flyer Degisn</Typography>
                      <Typography variant="body1">Iamonastudio</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">Packaging Design</Typography>
                      <Typography variant="body1">by mijalzagier</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ad68f554913d9d326d611e604ef79b0b-1608722734146/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">
                        Product Photography
                      </Typography>
                      <Typography variant="body1">by passionshake</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">
                        Web & Mobile Design
                      </Typography>
                      <Typography variant="body1">by skydesigner</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">Logo Design</Typography>
                      <Typography variant="body1">by eveeelin</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c15f6b22da97be41a8878e753a1a16c2-863645391592368980.489561/AF1BF970-07CA-454B-8AF1-2F3E06838C8B"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">Logo Design</Typography>
                      <Typography variant="body1">
                        by bruno_malagrino
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">
                        Social Media Design
                      </Typography>
                      <Typography variant="body1">fernandobengua</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box px={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    filter: "brightness(95%)",
                    "&:hover": {
                      opacity: "0.9",
                      transition: "all .3s",
                    },
                  }}
                  component="img"
                  height="275"
                  image="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png"
                  alt="green iguana"
                  onClick={(event) => {
                    console.log("do vip");
                  }}
                />
                <CardContent sx={{ height: "80px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b615b780b5c813d932953d05ec10f811-1596879215580/6b4a9867-ad06-415f-b307-11177ae30fdd.jpeg"
                        alt=""
                      />
                    </Avatar>
                    <Box>
                      <Typography variant="body2">Illustration</Typography>
                      <Typography variant="body1">
                        by christophbrandl
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Slider>
      </Box>
    </Container>
  );
}
