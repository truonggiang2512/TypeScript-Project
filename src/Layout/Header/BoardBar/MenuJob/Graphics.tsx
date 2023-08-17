import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DispatchType,
  RootState,
} from "../../../../Services/redux/configStore";
import { menuAsync } from "../../../../Services/redux/reducers/MenuJobReducer/menuReducer";
import { jobTypeAsync } from "../../../../Services/redux/reducers/JobTypeReducer/jobTypeReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/menuJob.min.css";
import { getIdTypeAsync } from "../../../../Services/redux/searchReducer/searchReducer";

type Props = {};
function Graphic({}: Props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const arrMenu = useSelector((state: RootState) => state.menuReducer.arrMenu);
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    const actionMenuAPI = menuAsync();
    dispatch(actionMenuAPI);
  }, []);
  const getDetailTypeJob = (id: number) => {
    const actionDetailJobAPI = getIdTypeAsync(id);
    dispatch(actionDetailJobAPI);
  };
  const renderMenuMax = () => {
    return arrMenu.map((loaiCongViec: any) => {
      return (
        <Box sx={{ textAlign: "center" }}>
          <Box
            key={loaiCongViec.id}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              getDetailTypeJob(loaiCongViec.id);
              navigate("/jobtype");
            }}
          >
            <Button
              sx={{ p: 0, cursor: "pointer" }}
              variant="text"
              aria-haspopup="true"
            >
              {loaiCongViec.tenLoaiCongViec}
            </Button>
          </Box>
        </Box>
      );
    });
  };

  return (
    <Box className="menuJob-content">
      <Slider {...settings}>{renderMenuMax()}</Slider>
    </Box>
  );
}

export default Graphic;
