import { Avatar, Box, Typography, Container, Button, Fab } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import FactoryTwoToneIcon from "@mui/icons-material/FactoryTwoTone";
import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import HireItem from "./HireItem";
import storage from "../../Utils/storage";
import { USER_LOGIN } from "../../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  getHireAsync,
  getProfileAsync,
  uploadAvatarJobAsync,
} from "../../Services/redux/reducers/ProfileReducer/profileReducer";
import { DispatchType, RootState } from "../../Services/redux/configStore";
import AddPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useNavigate } from "react-router-dom";
type Props = {};

const Profile = (props: Props) => {
  const arrHire = useSelector(
    (state: RootState) => state.profileReducer.arrHire
  );
  const userProfile: any = useSelector(
    (state: RootState) => state.profileReducer.arrProfile
  );
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const idUser = storage.get(USER_LOGIN);
  const imageHandler = (event: any) => {
    const file = event.target.files[0];
    const actionAPI = uploadAvatarJobAsync(file);
    dispatch(actionAPI);
  };

  useEffect(() => {
    const actionProfileApi = getProfileAsync(idUser?.user.id);
    dispatch(actionProfileApi);
    const actionAPI = getHireAsync();
    dispatch(actionAPI);
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
                  position: "relative",
                  "&:hover .fab": {
                    display: "block",
                  },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={userProfile.avatar}
                  sx={{ width: 150, height: 150 }}
                />
                <Fab
                  aria-label="add-image"
                  className="fab"
                  sx={{
                    position: "absolute",
                    overflow: "hidden",
                    display: "none",
                    opacity: 0.7,
                  }}
                >
                  <input
                    name="file"
                    type="file"
                    onChange={imageHandler}
                    accept=".jpg, .jpeg, .png"
                    multiple
                    style={{
                      position: "absolute",
                      top: "-40px",
                      left: 0,
                      height: "calc(100% + 36px)",
                      width: "calc(100% + 5px)",
                      outline: "none",
                    }}
                  />

                  <AddPhotoIcon />
                </Fab>
              </Box>
              <Box py={2} sx={{ textAlign: "center" }}>
                <Typography sx={{ color: "#000" }} variant="subtitle2">
                  {userProfile.name}
                </Typography>
                <Typography sx={{ color: "#000" }} variant="body1">
                  @{userProfile.name}
                </Typography>
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
                  </Box>
                  <Box pt={1}>
                    <Typography sx={{ color: "#000" }} variant="body1">
                      English - Basic
                    </Typography>
                    <Typography sx={{ color: "#000" }} variant="body1">
                      {userProfile.skill}
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
                    <Typography variant="body2" sx={{ p: 0, color: "#000" }}>
                      Tell us about your business
                    </Typography>
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
                  <Button
                    onClick={() => {
                      navigate("/brief");
                    }}
                    size="small"
                    variant="contained"
                  >
                    Create a new Brief
                  </Button>
                </Box>
              </Box>
            </Box>
            {arrHire.map((item) => {
              return (
                <Box mt={4}>
                  <HireItem HireDetail={item} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
