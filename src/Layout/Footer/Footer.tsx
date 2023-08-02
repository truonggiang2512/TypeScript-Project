import { Box, Container, IconButton, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <Container
      sx={{
        borderTop: "1px solid #73767e",
      }}
      maxWidth={false}
      disableGutters={true}
    >
      <Box px={6}>
        <Box
          pt={10}
          sx={{
            display: { md: "flex", xs: "none" },
            gap: 2,
            justifyContent: "space-between",
            borderBottom: "1px solid #73767e ",
          }}
        >
          <Box sx={{}}>
            <Typography sx={{ pb: 2 }} variant="subtitle2">
              Categories
            </Typography>
            <Typography variant="h6">Graphics & Design</Typography>
            <Typography variant="h6">Digital Marketing</Typography>
            <Typography variant="h6">Writing & Translation</Typography>
            <Typography variant="h6">Video & Animation</Typography>
            <Typography variant="h6">Music & Audio</Typography>
            <Typography variant="h6">Fiverr Logo Maker</Typography>
            <Typography variant="h6">Programming & Tech</Typography>
            <Typography variant="h6">Data</Typography>
            <Typography variant="h6">Business</Typography>
            <Typography variant="h6">Lifestyle</Typography>
            <Typography variant="h6">Photography</Typography>
            <Typography variant="h6">End-to-End Projects</Typography>
            <Typography variant="h6">Sitemap</Typography>
          </Box>
          <Box sx={{}}>
            <Typography sx={{ pb: 2 }} variant="subtitle2">
              About
            </Typography>
            <Typography variant="h6">Careers</Typography>
            <Typography variant="h6">Press & News</Typography>
            <Typography variant="h6">Partnerships</Typography>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="h6">Terms of Service</Typography>
            <Typography variant="h6">Intellectual Property Claims</Typography>
            <Typography variant="h6">Investor Relations</Typography>
          </Box>
          <Box sx={{}}>
            <Typography sx={{ pb: 2 }} variant="subtitle2">
              Support and Education
            </Typography>
            <Typography variant="h6">Help & Support</Typography>
            <Typography variant="h6">Trust & Safety</Typography>
            <Typography variant="h6">Selling on Fiverr</Typography>
            <Typography variant="h6">Buying on Fiverr</Typography>
            <Typography variant="h6">Fiverr Guides</Typography>
            <Typography variant="h6">Fiverr Logo Maker</Typography>
            <Typography variant="h6">Fiverr Workspace</Typography>
            <Typography variant="h6">Learn</Typography>
          </Box>
          <Box sx={{}}>
            <Typography sx={{ pb: 2 }} variant="subtitle2">
              Community
            </Typography>
            <Typography variant="h6">Customer Success Stories</Typography>
            <Typography variant="h6">Community Hub</Typography>
            <Typography variant="h6">Forum</Typography>
            <Typography variant="h6">Events</Typography>
            <Typography variant="h6">Blog</Typography>
            <Typography variant="h6">Influencers</Typography>
            <Typography variant="h6">Affiliates</Typography>
            <Typography variant="h6">Podcast</Typography>
            <Typography variant="h6">Invite a Friend</Typography>
            <Typography variant="h6">Become a Seller</Typography>
            <Typography variant="h6">Community Standards</Typography>
          </Box>
          <Box>
            <Typography sx={{ pb: 2 }} variant="subtitle2">
              Business Solutions
            </Typography>
            <Typography variant="h6">About Business Solutions</Typography>
            <Typography variant="h6">Fiverr Pro</Typography>
            <Typography variant="h6">Fiverr Certified</Typography>
            <Typography variant="h6">Fiverr Enterprise</Typography>
            <Typography variant="h6">ClearVoice</Typography>
            <Typography variant="h6">Working Not Working</Typography>
            <Typography variant="h6">Contact Sales</Typography>
          </Box>
        </Box>
      </Box>

      <Box py={3} px={6}>
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography sx={{ display: "inline-block" }} variant="h3">
              Fiverr
            </Typography>
            <span>© Fiverr International Ltd. 2023</span>
          </Box>
          <Box>
            <IconButton aria-label="fingerprint">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton aria-label="fingerprint">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="fingerprint">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="fingerprint">
              <PinterestIcon />
            </IconButton>
            <IconButton aria-label="fingerprint">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
