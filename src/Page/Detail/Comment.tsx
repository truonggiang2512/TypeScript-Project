import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

type Props = {};

function Comment({}: Props) {
  return (
    <Box pt={4}>
      <Box sx={{ borderTop: "1px solid", borderColor: "primary.main" }}>
        <Box py={3}>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Box>
              <Typography variant="subtitle2">Docute</Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon fontSize="small" />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Typography variant="body2">4.7</Typography>
                      <Typography>(105)</Typography>
                    </Box>
                  </Box>
                  <Box>|</Box>
                  <Box>
                    <Typography variant="body1">10 Orders in Queue</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box py={2} pl={3}>
            <Typography sx={{ color: "primary.main" }} variant="subtitle1">
              Kinza was great to work with. she helped guide me through the
              process by asking me all of the important questions that needed to
              be answered prior to starting. She was prompt and quick with
              communication, and her design is beautiful! I would definitely
              hire her again.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Comment;
