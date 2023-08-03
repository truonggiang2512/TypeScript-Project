import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, ListItem } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export default function Job() {
  return (
    <Box>
      <Box sx={{ Width: 280, boder: "none" }}>
        <Box sx={{ cursor: "pointer" }} onClick={() => {}}>
          <CardMedia
            sx={{
              borderRadius: 2,
              height: { md: "160px", xs: "210px", sm: "160px" },
            }}
            component="img"
            width="100%"
            image="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/87656171/original/86fd943327a7308f30bf941cd9d9bf15c7e676f3.jpg"
            alt="green iguana"
          />
          <CardContent sx={{ padding: "10px 0 0 0 " }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Stack direction="row" spacing={1}>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2">Docute</Typography>
                </Box>
              </Stack>
              <Box>
                <Typography variant="subtitle1">Level 2</Typography>
              </Box>
            </Box>
            <Box pt={2}>
              <Typography
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  msTextOverflow: "ellipsis",
                }}
                variant="subtitle1"
                color="text.main"
              >
                I am a professional social media marketing specialist. have been
                working on LinkedIn Marketing, LinkedIn ads and provide quality
                services to my clients
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }} py={2}>
              <StarIcon />
              <Typography
                style={{ display: "inline-block" }}
                variant="subtitle2"
              >
                5.0
              </Typography>
              <Typography
                style={{
                  display: "inline-block",
                  fontWeight: "300",
                  paddingLeft: "5px",
                }}
                variant="subtitle2"
              >
                (192)
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  display: "inline-block",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                From US$50
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
}
