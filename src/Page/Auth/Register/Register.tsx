import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../Services/redux/configStore";
import { useFormik } from "formik";
import * as yup from "yup";
import "dayjs/locale/en-gb";
import { signupAsyncAction } from "../../../Services/redux/reducers/userReducer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
type Props = {};
export interface UserSignupFrm {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: true;
  role: string;
  skill: [string];
  certification: [string];
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "75vh",
  bgcolor: "background.auth",
  border: "2px solid #000",
  boxShadow: 24,
  maxHeight: "90vh",
  overflowY: "auto",
};
export default function Register({}: Props) {
  const dispatch: DispatchType = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const signupFrm = useFormik<UserSignupFrm>({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [""],
      certification: [""],
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Enter valid Email !"
        ),
      password: yup
        .string()
        .required("password cannot be blank")
        .matches(
          /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      name: yup
        .string()
        .required("name cannot be blank")
        .matches(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
          "Enter valid name !"
        ),
      phone: yup.number().required("phone cannot be blank"),
    }),
    onSubmit: (values: UserSignupFrm) => {
      const actionApi = signupAsyncAction(values);
      dispatch(actionApi);
    },
  });

  return (
    <div>
      <Button color="success" variant="outlined" onClick={handleOpen}>
        Join
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "right", position: "sticky", top: 20 }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box p={3}>
            <Box id="modal-modal-description">
              <Box pb={3}>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                >
                  Fiverr
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography variant="subtitle2" color="primary.main">
                    Start for free
                  </Typography>
                </Box>
                <Box py={2}>
                  <Typography variant="h1" color="primary.h1">
                    Create new account
                  </Typography>
                </Box>
              </Box>

              <Box pt={3}>
                <form onSubmit={signupFrm.handleSubmit}>
                  <Box
                    sx={{
                      display: { md: "flex", xs: "block" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: { md: "40%", xs: "100%" } }}>
                      <Box pt={2}>
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            onBlur={signupFrm.handleBlur}
                            onChange={signupFrm.handleChange}
                          />
                        </FormControl>
                        {signupFrm.errors.name && (
                          <p
                            style={{ color: "red", margin: "5px 0px 0 0" }}
                            className="text text-danger"
                          >
                            (*) {signupFrm.errors.name}
                          </p>
                        )}
                      </Box>
                      <Box pt={2}>
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            onBlur={signupFrm.handleBlur}
                            onChange={signupFrm.handleChange}
                          />
                        </FormControl>
                        {signupFrm.errors.email && (
                          <p
                            style={{ color: "red", margin: "5px 0px 0 0" }}
                            className="text text-danger"
                          >
                            (*) {signupFrm.errors.email}
                          </p>
                        )}
                      </Box>
                      <Box pt={2}>
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onBlur={signupFrm.handleBlur}
                            onChange={signupFrm.handleChange}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                        {signupFrm.errors.password && (
                          <p
                            style={{ color: "red", margin: "5px 0px 0 0" }}
                            className="text text-danger"
                          >
                            (*) {signupFrm.errors.password}
                          </p>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Box
                        sx={{ paddingRight: { md: "90px", xs: "0px" } }}
                        pt={2}
                      >
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            onBlur={signupFrm.handleBlur}
                            onChange={signupFrm.handleChange}
                          />
                        </FormControl>
                        {signupFrm.errors.phone && (
                          <p
                            style={{ color: "red", margin: "5px 0px 0 0" }}
                            className="text text-danger"
                          >
                            (*) {signupFrm.errors.phone}
                          </p>
                        )}
                      </Box>

                      <Box mt={2}>
                        <FormControl>
                          <FormLabel id="demo-row-radio-buttons-group-label">
                            Gender
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue={true}
                            onChange={signupFrm.handleChange}
                          >
                            <FormControlLabel
                              value={false}
                              control={<Radio />}
                              label="Female"
                              name="gender"
                            />
                            <FormControlLabel
                              defaultChecked={true}
                              value={true}
                              control={<Radio />}
                              label="Male"
                              name="gender"
                            />
                          </RadioGroup>
                        </FormControl>
                        <Box pt={2}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Sign Up
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
