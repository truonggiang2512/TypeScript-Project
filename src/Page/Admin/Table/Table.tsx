import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Button, InputAdornment, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  deleteUserAsync,
  getUserAsync,
  updateUserAsync,
} from "../../../Services/redux/reducers/AdminReducer/adminReducer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../Services/redux/configStore";
import { useFormik } from "formik";
import * as yup from "yup";
import { signupAsyncAction } from "../../../Services/redux/reducers/userReducer";
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
  height: "67vh",
  bgcolor: "background.auth",
  border: "2px solid #000",
  boxShadow: 24,
  maxHeight: "90vh",
  overflowY: "auto",
};

function TableUser({}: Props) {
  const dispatch: DispatchType = useDispatch();
  const arrUser = useSelector((state: RootState) => state.adminReducer.arrUser);
  const [rows, setRows] = useState(arrUser);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const deleteUser = (id: any) => {
    const ActionDeleteAPI = deleteUserAsync(id);
    dispatch(ActionDeleteAPI);
  };
  const updateUser = (model: any) => {
    console.log(model, "13213");
    const ActionUpdateAPI = updateUserAsync(model);
    dispatch(ActionUpdateAPI);
  };
  useEffect(() => {
    setRows(arrUser);
  }, [arrUser]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex" }}>
          <Box>
            <Button
              onClick={() => {
                updateUser(params.row);
              }}
            >
              Edit
            </Button>
          </Box>
          <Button
            onClick={() => {
              deleteUser(params.id);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];
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
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      name: yup
        .string()
        .required("name cannot be blank")
        .matches(
          /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
          "Enter valid name !"
        ),
      phone: yup
        .string()
        .required("phone cannot be blank")
        .matches(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
          "phone invalid"
        ),
    }),
    onSubmit: (values: UserSignupFrm) => {
      const actionApi = signupAsyncAction(values);
      dispatch(actionApi);
    },
  });
  useEffect(() => {
    const actionUserAPI = getUserAsync();
    dispatch(actionUserAPI);
  }, []);

  return (
    <Box>
      <Box py={3}>
        <Button onClick={handleOpen}>Thêm Người dùng</Button>
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
                <Box py={2}>
                  <Typography variant="h1" color="primary.h1">
                    Adding new account
                  </Typography>
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
      </Box>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          editMode="row"
        />
      </Box>
    </Box>
  );
}

export default TableUser;
