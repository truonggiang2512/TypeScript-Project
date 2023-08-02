import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
function Solutions() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          display: { md: "flex", xs: "block", sm: "block" },
          px: 8,
          py: 10,
          backgroundColor: "background.solutions",
          alignItems: "center",
          textAlign: { md: "left", sm: "center" },
        }}
      >
        <Box>
          <Box
            sx={{
              width: { md: "70%", xs: "100%" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <Box width="100%" sx={{ textAlign: { md: "left", xs: "center" } }}>
              <Box sx={{ display: "inline-block" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "white" }}
                  variant="h3"
                >
                  Fiverr
                </Typography>
              </Box>
              <Box sx={{ display: "inline-block", pl: 1 }}>
                <Typography sx={{ color: "white" }} pt={1} variant="inherit">
                  Business Solutions
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{ color: "white", width: { md: "80%", xs: "100%" } }}
              variant="h3"
            >
              Advanced solutions and professional talent for businesses
            </Typography>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left", sm: "center" },
              }}
            >
              <Box pt={3}>
                <Stack pb={1} direction="row" alignItems="center" gap={2}>
                  <VerifiedIcon
                    fontSize="medium"
                    sx={{
                      color: "#ea80fc",
                      display: { md: "block", xs: "none", sm: "none" },
                    }}
                  />
                  <Box width="100%">
                    <Typography sx={{ color: "white" }} variant="subtitle2">
                      Fiverr Pro
                    </Typography>
                    <Typography sx={{ color: "white" }} variant="subtitle1">
                      Access top freelancers and professional business tools for
                      any project
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box pt={3}>
                <Stack pb={1} direction="row" alignItems="center" gap={2}>
                  <VerifiedIcon
                    fontSize="medium"
                    sx={{
                      color: "#ea80fc",
                      display: { md: "block", xs: "none", sm: "none" },
                    }}
                  />
                  <Box width="100%">
                    <Typography variant="subtitle2" sx={{ color: "white" }}>
                      Fiverr Certified
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white" }}>
                      Build your own branded marketplace of certified experts
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box pt={3}>
                <Stack pb={1} direction="row" alignItems="center" gap={2}>
                  <VerifiedIcon
                    fontSize="medium"
                    sx={{
                      color: "#ea80fc",
                      display: { md: "block", xs: "none", sm: "none" },
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: "white" }}>
                      Fiverr Enterprise
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white" }}>
                      Manage your freelance workforce and onboard additional
                      talent with an end-to-end SaaS solution
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box pt={4}>
              <Button
                sx={{
                  bgcolor: "white",
                  color: "black",

                  ":hover": {
                    bgcolor: "white",
                    color: "#898989",
                  },
                }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
            </Box>
          </Box>
        </Box>
        <Box pt={10}>
          <Box>
            <img
              style={{
                maxHeight: "356px",
                width: "100%",
              }}
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Solutions;
