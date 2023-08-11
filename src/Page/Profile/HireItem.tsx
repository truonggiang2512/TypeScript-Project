import { Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { DispatchType, RootState } from "../../Services/redux/configStore";
import {
  deleteJobAsyncAPI,
  GetHireModel,
} from "../../Services/redux/reducers/ProfileReducer/profileReducer";

type Props = { HireDetail: GetHireModel };

function HireItem({ HireDetail }: Props) {
  const dispatch: DispatchType = useDispatch();
  return (
    <div>
      <Box sx={{ bgcolor: "white", width: { md: "50vw", xs: "100%" } }}>
        <Box>
          <Box sx={{ display: { md: "flex", xs: "block" }, gap: 2 }}>
            <Box sx={{ width: { md: "40%", xs: "100%" } }}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={HireDetail.congViec.hinhAnh}
                alt=""
              />
            </Box>
            <Box sx={{ width: { md: "60%", xs: "100%" } }}>
              <Box>
                <Typography sx={{ color: "#000" }} variant="subtitle2">
                  {HireDetail.congViec.tenCongViec}
                </Typography>
                <Box>
                  <Typography sx={{ color: "#000" }} variant="body1">
                    {HireDetail.congViec.moTaNgan}
                  </Typography>
                </Box>
                <Box
                  py={2}
                  sx={{ display: "flex", justifyContent: "left", gap: 2 }}
                >
                  <NavLink
                    to={`/detail/${HireDetail.congViec.maChiTietLoaiCongViec}`}
                  >
                    <Button size="small" variant="contained">
                      View Detail
                    </Button>
                  </NavLink>
                  <Button size="small" variant="contained">
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      const actionAPI = deleteJobAsyncAPI(HireDetail.id);
                      dispatch(actionAPI);
                    }}
                    size="small"
                    variant="contained"
                  >
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
