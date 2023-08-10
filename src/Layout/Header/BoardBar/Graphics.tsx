import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menuAsync } from "../../../Services/redux/reducers/MenuJobReducer/menuReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../Services/redux/configStore";
import { jobTypeAsync } from "../../../Services/redux/reducers/JobTypeReducer/jobTypeReducer";
import { useNavigate } from "react-router-dom";
type Props = {};
function Graphic({}: Props) {
  const arrMenu = useSelector((state: RootState) => state.menuReducer.arrMenu);

  // for (const loaiCongViec of arrMenu) {
  //   // Lặp qua mảng nhóm chi tiết loại cho từng loại công việc
  //   for (const nhomChiTietLoai of loaiCongViec.dsNhomChiTietLoai) {
  //     // Lặp qua mảng chi tiết loại cho từng nhóm chi tiết loại
  //     for (const chiTietLoai of nhomChiTietLoai.dsChiTietLoai) {
  //       const tenChiTiet = chiTietLoai.tenChiTiet;
  //       console.log(tenChiTiet);
  //     }
  //   }
  // }
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    const actionMenuAPI = menuAsync();
    dispatch(actionMenuAPI);
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const renderMenuMax = () => {
    return arrMenu.map((loaiCongViec: any) => {
      return (
        <Box
          key={loaiCongViec.id}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            const actionTypeAPI = jobTypeAsync(loaiCongViec.id);
            dispatch(actionTypeAPI);
            console.log(loaiCongViec.id, "id");
            navigate("/jobtype");
          }}
        >
          <Button
            sx={{ p: 0, cursor: "pointer" }}
            variant="text"
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            // onClick={handleClick}
          >
            {loaiCongViec.tenLoaiCongViec}
          </Button>
          <Menu
            sx={{ mt: 2 }}
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <List sx={{ maxHeight: "80vh", width: "80vw" }}>
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
              </Box>
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
              </Box>
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Website Development
                  </Typography>
                  <Box>
                    <Button> Logo Design</Button>
                  </Box>
                  <Box>
                    <Button>Brand Style Guides</Button>
                  </Box>
                  <Box>
                    <Button>Business Cards & Stationery</Button>
                  </Box>
                  <Box>
                    <Button> Fonts & Typography</Button>
                  </Box>
                </Box>
              </Box>
            </List>
          </Menu>
        </Box>
      );
    });
  };
  const renderMenuMin = () => {
    return arrMenu.map((item: any) => {
      return (
        <Box
          width="200px"
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <Accordion
            sx={{
              boxShadow: "none",
              color: "primary.main",
            }}
            expanded={expanded}
            onChange={handleAccordionChange}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ color: "primary.main" }}>
                {item.tenLoaiCongViec}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Logo Design
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Brand Style Guides
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Game Art
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Graphics for Streamers
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Business Cards & Stationery
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Website Design
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    App Design
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    UX Design
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Landing Page Design
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
            <AccordionDetails>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionDetails>
                  <Typography sx={{ color: "primary.main" }}>
                    Resume Design
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </Box>
      );
    });
  };
  if (windowWidth >= 900) {
    return (
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {renderMenuMax()}
      </Box>
    );
  } else {
    return <Box>{renderMenuMin()}</Box>;
  }
}

export default Graphic;
