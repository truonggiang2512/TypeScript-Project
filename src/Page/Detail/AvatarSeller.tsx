import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

type Props = {};

function AvatarSeller({}: Props) {
  return (
    <div>
      <Box py={2}>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography variant="subtitle2">Docute</Typography>
              <Typography variant="body1">@docute_developer</Typography>
            </Box>
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
      </Box>
    </div>
  );
}

export default AvatarSeller;
