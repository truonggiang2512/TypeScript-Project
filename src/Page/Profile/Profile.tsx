import { Avatar, Box, Typography, Container, Button } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import FactoryTwoToneIcon from "@mui/icons-material/FactoryTwoTone";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import React, { useEffect } from "react";
import { Add } from "@mui/icons-material";
import HireItem from "./HireItem";
import storage from "../../Utils/storage";
import { USER_LOGIN } from "../../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAsync } from "../../Services/redux/reducers/ProfileReducer/profileReducer";

type Props = {};

const Profile = (props: Props) => {
  const dispatch = useDispatch();
  const idUser = storage.get(USER_LOGIN);
  const userProfile: any = useSelector(
    (state: any) => state.profileReducer.arrProfile
  );
  useEffect(() => {
    const actionProfileApi: any = getProfileAsync(idUser.user.id);
    dispatch(actionProfileApi);
  }, []);
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ bgcolor: "background.detail" }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          px: { md: 15, xs: 3 },
          py: 7,
          gap: 5,
        }}
      >
        <Box sx={{ witdh: { md: "30%", xs: "100%" } }}>
          <Box sx={{ bgcolor: "white", width: { md: "30vw", xs: "100%" } }}>
            <Box px={4} py={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 150, height: 150 }}
                />
              </Box>
              <Box py={2} sx={{ textAlign: "center" }}>
                <Typography sx={{ color: "#000" }} variant="subtitle2">
                  {userProfile.name}
                </Typography>
                <Typography sx={{ color: "#000" }} variant="body1">
                  @{userProfile.name}
                </Typography>
                <Button size="small">
                  <ModeIcon sx={{ color: "#000" }} fontSize="small" />
                </Button>
              </Box>
              <Box sx={{ borderTop: "0.5px solid " }}>
                <Box py={2}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <LocationOnIcon sx={{ color: "#000" }} fontSize="small" />{" "}
                      <Typography sx={{ color: "#000" }} variant="body1">
                        From
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#000" }} variant="body2">
                        VietNam
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <PersonIcon sx={{ color: "#000" }} fontSize="small" />{" "}
                      <Typography sx={{ color: "#000" }} variant="body1">
                        Member since
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#000" }} variant="body2">
                        Aug 2023
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            my={5}
            sx={{ bgcolor: "white", width: { md: "30vw", xs: "100%" } }}
          >
            <Box px={4} py={4}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", pb: 7 }}
              >
                <Box>
                  <Typography sx={{ color: "#000" }} variant="subtitle2">
                    Description
                  </Typography>
                </Box>
                <Box>
                  <Button sx={{ p: 0, color: "#000" }} variant="text">
                    Edit Description
                  </Button>
                </Box>
              </Box>
              <Box sx={{ borderTop: "0.5px solid ", borderColor: "#000" }}>
                <Box py={4}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography sx={{ color: "#000" }} variant="subtitle2">
                        Languages
                      </Typography>
                    </Box>
                    <Box>
                      <Button sx={{ p: 0, color: "#000" }} variant="text">
                        Add New
                      </Button>
                    </Box>
                  </Box>
                  <Box pt={1}>
                    <Typography sx={{ color: "#000" }} variant="body1">
                      English - Basic
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ borderTop: "0.5px solid ", borderColor: "#212121" }}>
                <Box py={2}>
                  <Typography sx={{ color: "#000" }} variant="subtitle2">
                    Linked Accounts
                  </Typography>
                  <Box>
                    <Button
                      sx={{ color: "#000" }}
                      size="small"
                      startIcon={<Add />}
                    >
                      Facebook
                    </Button>
                  </Box>
                  <Button
                    sx={{ color: "#000" }}
                    size="small"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: { md: "70%", xs: "100%" } }}>
          <Box sx={{ width: { md: "70%", xs: "100%" } }}>
            <Box sx={{ bgcolor: "white", width: { md: "50vw", xs: "100%" } }}>
              <Box px={4} py={4}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <FactoryTwoToneIcon sx={{ color: "#000" }} fontSize="large" />
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography sx={{ color: "#000" }} variant="body2">
                        Buy Services for works?
                      </Typography>
                      <Typography sx={{ color: "#000" }} variant="body1">
                        Help us tallor your experience to fif your needs
                      </Typography>
                    </Box>
                    <Button
                      endIcon={<NavigateNextTwoToneIcon />}
                      variant="text"
                      sx={{ p: 0, color: "#000" }}
                    >
                      Tell us about your business
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              mt={4}
              sx={{ bgcolor: "white", width: { md: "50vw", xs: "100%" } }}
            >
              <Box px={4} py={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ color: "#000" }} variant="body1">
                    It seems that you dont have any active Gigs. Get Selling
                  </Typography>
                  <Button size="small" variant="contained">
                    Create a new Gig
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
            <Box mt={4}>
              <HireItem />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
