import { Box, Typography } from "@mui/material";
import React from "react";
import { DetailModel } from "../../Services/redux/reducers/DetailReducer/detailReducer";

type Props = { arrDetail: DetailModel[] };

function GigDetail({ arrDetail }: Props) {
  return (
    <div>
      <Box>
        <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
          About this gig
        </Typography>
        <Box py={2}>
          {arrDetail?.map((item) => {
            return (
              <Box>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  {item.congViec.moTa}
                </Typography>
              </Box>
            );
          })}

          <Box py={2}>
            <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
              My Services Includes.
            </Typography>
          </Box>
          <Box
            sx={{ fontSize: "16px", fontWeight: "500", color: "primary.main" }}
          >
            <ul>
              <li>Unlimited Unique concepts</li>
              <li>UNLIMITED revisions until your satisfaction. </li>
              <li>
                100% original vector logo, convert to any size without the loss
                of quality.
              </li>
              <li>
                Original source files: JPG, PNG, PDF, PSD, AI or any other file
                types you would require.
              </li>
              <li>FREE 24 hour Express Delivery</li>
              <li>Friendly communication</li>
              <li>Not Satisfied I will refund your Money </li>
              <li>Professional and fast customer service and communication</li>
            </ul>
          </Box>
          <Box>
            <Typography sx={{ color: "primary.main" }} variant="subtitle1">
              Please feel free to let me know if you like to know any other
              details and I would be happy to help.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "primary.main" }} variant="subtitle1">
              If you need other graphic services (banner, flyer, cover, business
              cards, social media covers etc)
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default GigDetail;
