import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { searchJobAsync } from "../../../Services/redux/searchReducer/searchReducer";
import { DispatchType } from "../../../Services/redux/configStore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();
  const submitSearch = (event: any) => {
    event.preventDefault();
    let value = event.target.search.value;
    const actionApiSearch = searchJobAsync(value);
    dispatch(actionApiSearch);
    navigate("/search");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/images5/Green-Aesthetic-HD-Backgrounds-Computer.jpg")`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          height: { xs: "50vh", md: "65vh" },
          pt: { xs: "0px", md: "0px", sm: "100px" },
        }}
      >
        <Box
          px={4}
          sx={{
            width: { xs: "100%", md: "80vh" },
            pl: { xs: "40px", md: "130px" },
          }}
        >
          <Box py={5}>
            <Box width="100%">
              <Typography
                sx={{ color: "white", textAlign: "left" }}
                variant="h3"
              >
                Find the right <i>freelance </i> service, right away
              </Typography>
            </Box>
            <Box py={3} width="100%">
              <form action="" onSubmit={submitSearch}>
                <TextField
                  fullWidth
                  type="search"
                  size="small"
                  id="search"
                  label="What service are you looking for?"
                  variant="filled"
                  color="secondary"
                  InputProps={{
                    style: {
                      background: "white",
                      color: "#000",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button type="submit" sx={{ p: 0, m: 0 }}>
                          <SearchIcon sx={{ color: "black" }} />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Box>
          </Box>
          <Box
            width="70vw"
            sx={{
              display: { md: "flex", xs: "none" },
              gap: 1,
            }}
          >
            <Typography sx={{ color: "#fff" }} variant="body2">
              Popular :
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  ":hover": { backgroundColor: "#fff", color: "#000" },
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "1px 18px 0px",
                }}
              >
                Web Design
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ":hover": { backgroundColor: "#fff", color: "#000" },
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "1px 18px 0px",
                }}
              >
                Word Press
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ":hover": { backgroundColor: "#fff", color: "#000" },
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "1px 18px 0px",
                }}
              >
                Logo Design
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ":hover": { backgroundColor: "#fff", color: "#000" },
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "1px 18px 0px",
                }}
              >
                AI Services
              </Button>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
