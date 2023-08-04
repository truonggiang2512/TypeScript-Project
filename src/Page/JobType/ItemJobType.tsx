import { Box, Typography, Button } from "@mui/material";
import React from "react";

type Props = {};

function ItemJobType({}: Props) {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: 280,
        }}
      >
        <img
          width="100%"
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png"
          alt=""
        />
      </Box>
      <Box pt={2}>
        <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
          Websites
        </Typography>
        <Box pt={1}>
          <Button
            sx={{ fontSize: "18px", fontWeight: "400", pl: 0 }}
            variant="text"
          >
            Website Development
          </Button>
        </Box>
        <Box pt={1}>
          <Button
            sx={{ fontSize: "18px", fontWeight: "400", pl: 0 }}
            variant="text"
          >
            Website Development
          </Button>
        </Box>
        <Box pt={1}>
          <Button
            sx={{ fontSize: "18px", fontWeight: "400", pl: 0 }}
            variant="text"
          >
            Website Development
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ItemJobType;
