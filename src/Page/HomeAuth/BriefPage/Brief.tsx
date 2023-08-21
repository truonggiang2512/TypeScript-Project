import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
type Props = {};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.auth",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export interface BriefFrm {
  field1: string;
  field2: string;
}
function Brief({}: Props) {
  const [openMatching, setOpeMatching] = React.useState(false);
  const handleOpen = () => {
    setOpeMatching(true);
  };
  const handleClose = () => {
    setOpeMatching(false);
  };
  const [openTitle, setOpenTitle] = React.useState(false);
  const handleOpenTitle = () => setOpenTitle(true);
  const handleCloseTitle = () => setOpenTitle(false);
  const [openDescription, setOpenDescription] = React.useState(false);
  const handleOpenDescription = () => setOpenDescription(true);
  const handleCloseDescription = () => setOpenDescription(false);
  const [open, setOpen] = React.useState(false);

  const handleAlertOpen = () => {
    setOpen(true);
  };

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const briefFrm = useFormik<BriefFrm>({
    initialValues: {
      field1: "",
      field2: "",
    },
    validationSchema: yup.object().shape({
      field1: yup
        .string()
        .required("This field cannot be blank")
        .min(10, "Write at least 10 characters"),
      field2: yup
        .string()
        .required(
          "Enter a detailed description—it lets the seller prepare an accurate quote."
        ),
    }),
    onSubmit: (values: any) => {
      handleAlertOpen();
    },
  });
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: { md: "flex", xs: "block" }, py: 5, gap: 10 }}>
        <Box>
          <Box
            sx={{
              position: { md: "sticky", xs: "none" },
              top: 140,
            }}
          >
            <Box>
              <Typography variant="h1">Let the matching begin...</Typography>
              <Box sx={{ py: 2 }}>
                <Typography variant="subtitle1">
                  This is where you fill us in on the big picture.
                </Typography>
              </Box>
              <Typography
                variant="body2"
                onClick={() => {
                  handleOpen();
                }}
                sx={{ textDecoration: "underline ", cursor: "pointer" }}
              >
                How does this matching thing work?
              </Typography>
              <Modal
                open={openMatching}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box
                  sx={{
                    ...style,
                    width: { md: "800px", xs: "100%" },
                    height: { md: "60vh", xs: "100%", sm: "60vh" },
                  }}
                >
                  <Box
                    onClick={handleClose}
                    sx={{ textAlign: "right", cursor: "pointer" }}
                  >
                    <CloseIcon />
                  </Box>
                  <Box sx={{ py: 5 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography sx={{ fontSize: "28px" }} variant="h3">
                        We'll match you with the best sellers
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        overflowY: "auto",
                        height: { xs: "500px", md: "auto" },
                      }}
                      py={6}
                    >
                      <Grid container spacing={{ xs: 4, md: 3 }} columns={9}>
                        <Grid item xs={9} sm={3} md={3}>
                          <Box>
                            <Box px={3} sx={{ textAlign: "center" }}>
                              <img
                                style={{ height: "48px", width: "48px" }}
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                                alt=""
                              />
                              <Box py={0.5}>
                                <Typography variant="body2">
                                  Fill your brief
                                </Typography>
                              </Box>
                              <Typography variant="body1">
                                List what you need for your project or business.
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={9} sm={3} md={3}>
                          <Box>
                            <Box px={3} sx={{ textAlign: "center" }}>
                              <img
                                style={{ height: "48px", width: "48px" }}
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                                alt=""
                              />
                              <Box py={0.5}>
                                <Typography variant="body2">
                                  Get offers
                                </Typography>
                              </Box>
                              <Typography variant="body1">
                                Check your inbox for offers from sellers we
                                found for you.
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={9} sm={3} md={3}>
                          <Box>
                            <Box px={3} sx={{ textAlign: "center" }}>
                              <img
                                style={{ height: "48px", width: "48px" }}
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                                alt=""
                              />
                              <Box py={0.5}>
                                <Typography variant="body2">
                                  Order away
                                </Typography>
                              </Box>
                              <Typography variant="body1">
                                Accept an offer from 1 of our top sellers to get
                                your work started.
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      onClick={handleClose}
                      size="large"
                      variant="contained"
                    >
                      Got it
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
        <form onSubmit={briefFrm.handleSubmit}>
          <Box pt={3}>
            <Box>
              <Typography variant="subtitle2">
                Give your project brief a title
              </Typography>
              <Typography variant="subtitle1">
                Keep it short and simple - this will help us match you to the
                right category.
              </Typography>
            </Box>
            <Box py={2}>
              <TextField
                fullWidth
                label=""
                placeholder="Example: Create a WorkPress websites about my company"
                id="field1"
                name="field1"
                onBlur={briefFrm.handleBlur}
                onInput={briefFrm.handleChange}
              />
              {briefFrm.errors.field1 && (
                <p
                  style={{ color: "red", margin: "5px 0px 0 0" }}
                  className="text text-danger"
                >
                  (*) {briefFrm.errors.field1}
                </p>
              )}
            </Box>
            <Box>
              <Typography
                variant="body2"
                onClick={() => {
                  handleOpenTitle();
                }}
                sx={{ textDecoration: "underline ", cursor: "pointer" }}
              >
                Some title examples
              </Typography>
            </Box>

            <Box pt={5}>
              <Box>
                <Typography variant="subtitle2">
                  What are you looking to get done?
                </Typography>
                <Typography variant="subtitle1">
                  This will help get your brief to the right talent. Specifics
                  help here.
                </Typography>
              </Box>
              <Box py={3}>
                <TextField
                  id="field2"
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="I need..."
                  onBlur={briefFrm.handleBlur}
                  onInput={briefFrm.handleChange}
                  name="field2"
                />
                {briefFrm.errors.field2 && (
                  <p
                    style={{ color: "red", margin: "5px 0px 0 0" }}
                    className="text text-danger"
                  >
                    (*) {briefFrm.errors.field2}
                  </p>
                )}
              </Box>
              <Typography
                variant="body2"
                onClick={() => {
                  handleOpenDescription();
                }}
                sx={{ textDecoration: "underline ", cursor: "pointer" }}
              >
                How to write a great description
              </Typography>
            </Box>
            <Box py={3}>
              <Button
                type="submit"
                size="large"
                endIcon={<ArrowRightAltIcon />}
                variant="contained"
              >
                Continute
              </Button>
            </Box>
          </Box>
        </form>
        <Modal
          open={openTitle}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...style,

              height: { md: "auto", xs: "100%", sm: "auto" },
              width: { md: "auto", xs: "100%", sm: "auto" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "24px" }} variant="h3">
                  Some title examples
                </Typography>
              </Box>
              <Box
                onClick={handleCloseTitle}
                sx={{ textAlign: "right", cursor: "pointer" }}
              >
                <CloseIcon />
              </Box>
            </Box>
            <Box py={3}>
              <li>Develop an Android app for a startup</li>
              <li>SEO optimization for my website</li>
              <li>Social media marketing for my business</li>
            </Box>
            <Box sx={{ textAlign: "right", bottom: 10 }}>
              <Button
                onClick={handleCloseTitle}
                size="large"
                variant="contained"
              >
                Got it
              </Button>
            </Box>
          </Box>
        </Modal>
        <Modal
          open={openDescription}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...style,

              height: { md: "auto", xs: "100%", sm: "auto" },
              width: { md: "auto", xs: "100%", sm: "auto" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "24px" }} variant="h3">
                  How to write a great description
                </Typography>
              </Box>
              <Box
                onClick={handleCloseDescription}
                sx={{ textAlign: "right", cursor: "pointer" }}
              >
                <CloseIcon />
              </Box>
            </Box>
            <Box py={3} sx={{ fontSize: "16px" }}>
              <li>Make it clear what you want the final deliverable to be</li>
              <li>Include specifics (the more the better!)</li>
              <li>
                Share references and inspiration (use links or attach files)
              </li>
              <li>Throw in your preferences like voice & tone, style etc.</li>
            </Box>
            <Box sx={{ textAlign: "right", bottom: 10 }}>
              <Button
                onClick={handleCloseDescription}
                size="large"
                variant="contained"
              >
                Got it
              </Button>
            </Box>
          </Box>
        </Modal>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successful!!!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default Brief;
