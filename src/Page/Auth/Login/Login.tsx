import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType } from "../../../Services/redux/configStore";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginAsyncAction } from "../../../Services/redux/reducers/userReducer";
type Props = {};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "40vw", xs: "90vw" },
  height: "70vh",
  bgcolor: "background.auth",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export interface UserLoginFrm {
  email: string;
  password: string;
}
export default function Login({}: Props) {
  const isLoginModel = useSelector((state: any) => state.userReducer.isOpen);
  const dispatch: DispatchType = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("email is invalid")
        .required("email cannot be blank"),
      password: yup.string().required("password cannot be blank"),
    }),
    onSubmit: (values: UserLoginFrm) => {
      console.log(values);
      const actionApi = loginAsyncAction(values);
      dispatch(actionApi);

      if (isLoginModel == true) {
        setOpen(false);
      }
    },
  });

  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title-login"
        aria-describedby="modal-modal-description-login"
      >
        <Box sx={style} id="modal-modal-title-login">
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              width: { md: "3%", xs: "100%" },
              justifyContent: "space-between",
              alignItems: "center",
              pb: { md: 5, sm: 5, xs: 2 },
            }}
          >
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

            <Button variant="text">Home</Button>
            <Button variant="text">Join</Button>
          </Box>
          <Box>
            <Box>
              <Typography variant="subtitle2" color="primary.main">
                Welcome back
              </Typography>
            </Box>
            <Box sx={{ py: { md: 2, xs: 0, sm: 2 } }}>
              <Typography variant="h1" color="primary.h1">
                Sign in to Fiverr
              </Typography>
            </Box>
          </Box>

          <Box pt={4}>
            <form onSubmit={loginFrm.handleSubmit}>
              <Box
                sx={{
                  display: { md: "flex", xs: "block" },
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ pt: { xs: 1, sm: 2, md: 2 } }}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        onBlur={loginFrm.handleBlur}
                        onInput={loginFrm.handleChange}
                      />
                    </FormControl>
                    {loginFrm.errors.email && (
                      <p
                        style={{ color: "red", margin: "5px 0px 0 0" }}
                        className="text text-danger"
                      >
                        (*) {loginFrm.errors.email}
                      </p>
                    )}
                  </Box>
                  <Box pt={2}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        onInput={loginFrm.handleChange}
                        onBlur={loginFrm.handleBlur}
                      />
                    </FormControl>
                    {loginFrm.errors.password && (
                      <p
                        style={{ color: "red", margin: "5px 0px 0 0" }}
                        className="text text-danger"
                      >
                        (*) {loginFrm.errors.password}
                      </p>
                    )}
                  </Box>
                  <Box pt={2}>
                    <Button type="submit" variant="contained">
                      Login
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
