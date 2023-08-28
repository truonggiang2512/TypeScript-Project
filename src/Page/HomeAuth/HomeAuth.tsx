import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobAsynAction } from "../../Services/redux/reducers/HomePage/homeReducer";
import { getProfileAsync } from "../../Services/redux/reducers/ProfileReducer/profileReducer";
import { USER_LOGIN } from "../../Utils/constant";
import storage from "../../Utils/storage";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Categories from "./Categories/Categories";
import { Banner } from "../Home/Banner/Banner";
import { useNavigate } from "react-router-dom";
type Props = {};

function HomeAuth({}: Props) {
  const idUser = storage.get(USER_LOGIN);
  const userProfile: any = useSelector(
    (state: any) => state.profileReducer.arrProfile
  );
  const arrAllJob: any = useSelector(
    (state: any) => state.homeReducer.arrAllJob
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const actionProfileApi: any = getProfileAsync(idUser?.user.id);
    dispatch(actionProfileApi);

    const actionJobApi: any = jobAsynAction();
    dispatch(actionJobApi);
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Box py={5} px={2}>
          <Box>
            <Typography variant="h3">
              Nice to meet you,{userProfile.name}
            </Typography>
          </Box>
          <Box
            my={3}
            sx={{ border: 1, borderRadius: "7px", borderColor: "primary.main" }}
          >
            <Box
              px={3}
              py={3}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AutoFixHighIcon fontSize="large" />
                <Box>
                  <Typography variant="subtitle2">
                    Get proposals from the most relevant sellers
                  </Typography>
                  <Typography>
                    Simply create a project brief and let us do the searching
                    for you.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={() => {
                    navigate("/brief");
                  }}
                  size="large"
                  variant="contained"
                >
                  Create a brief
                </Button>
              </Box>
            </Box>
          </Box>

          <Box my={5}>
            <Categories arrAllJob={arrAllJob} />
          </Box>

          <Box mt={5}>
            <Banner />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default HomeAuth;
