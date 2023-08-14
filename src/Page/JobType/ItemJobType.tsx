import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DispatchType, RootState } from "../../Services/redux/configStore";
import { DsNhomChiTietLoai } from "../../Services/redux/reducers/JobTypeReducer/jobTypeReducer";
import { searchJobAsync } from "../../Services/redux/searchReducer/searchReducer";

type Props = {
  dsNhom: DsNhomChiTietLoai;
};

function ItemJobType({ dsNhom }: Props) {
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{}}>
        <img width="100%" src={dsNhom.hinhAnh} alt="" />
      </Box>
      <Box pt={2}>
        <Typography sx={{ fontSize: "20px" }} variant="subtitle2">
          {dsNhom.tenNhom}
        </Typography>

        {dsNhom.dsChiTietLoai.map((item) => {
          return (
            <Box pt={1}>
              <Button
                sx={{ fontSize: "18px", fontWeight: "400", pl: 0 }}
                variant="text"
                onClick={() => {
                  const actionAPI = searchJobAsync(item.tenChiTiet);
                  dispatch(actionAPI);
                  navigate("/search");
                }}
              >
                {item.tenChiTiet}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ItemJobType;
