import { Box, Typography, Button } from "@mui/material";
import React from "react";

type Props = {};

function HireItem({}: Props) {
  return (
    <div>
      <Box sx={{ bgcolor: "white", width: { md: "50vw", xs: "100%" } }}>
        <Box>
          <Box sx={{ display: { md: "flex", xs: "block" }, gap: 2 }}>
            <Box sx={{ width: { md: "40%", xs: "100%" } }}>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png"
                alt=""
              />
            </Box>
            <Box sx={{ width: { md: "60%", xs: "100%" } }}>
              <Box>
                <Typography sx={{ color: "#000" }} variant="subtitle2">
                  I will create an effective instagram hashtag growth strategy
                </Typography>
                <Box>
                  <Typography sx={{ color: "#000" }} variant="body1">
                    We have an expert team of 3D Designers with experience of
                    working on various Domestic & International Projects like
                  </Typography>
                </Box>
                <Box
                  py={2}
                  sx={{ display: "flex", justifyContent: "left", gap: 2 }}
                >
                  <Button size="small" variant="contained">
                    View Detail
                  </Button>
                  <Button size="small" variant="contained">
                    Edit
                  </Button>
                  <Button size="small" variant="contained">
                    X
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HireItem;
