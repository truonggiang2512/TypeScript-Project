import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  deleteJobAsync,
  getJobAsync,
  postJobAsync,
} from "../../../Services/redux/reducers/AdminReducer/adminReducer";
import { Button, InputAdornment, TextField, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../Services/redux/configStore";
import { useFormik } from "formik";
import * as yup from "yup";
type Props = {};
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
export interface JobModel {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}
const currencies = [
  {
    value: "1",
    label: "1 ⭐",
  },
  {
    value: "2",
    label: "2 ⭐",
  },
  {
    value: "3",
    label: "3 ⭐",
  },
  {
    value: "4",
    label: "4 ⭐",
  },
  {
    value: "5",
    label: "5 ⭐",
  },
];
function TableJob({}: Props) {
  const dispatch: DispatchType = useDispatch();
  const arrJob = useSelector((state: RootState) => state.adminReducer.arrJob);
  const deleteHireJob = (id: any) => {
    const ActionDeleteAPI = deleteJobAsync(id);
    dispatch(ActionDeleteAPI);
  };
  const [rows, setRows] = useState(arrJob);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let randomNumber = Math.floor(Math.random() * 500);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "tenCongViec",
      headerName: "Job Name",
      width: 400,
      editable: true,
    },
    {
      field: "hinhAnh",
      headerName: "Image",
      type: "image",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <img width="100%" height="90%" src={params.value} />
      ),
    },
    {
      field: "saoCongViec",
      headerName: "Rate",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "danhGia",
      headerName: "judge",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button>Edit</Button>
          <Button
            onClick={() => {
              deleteHireJob(params.id);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];
  const addjobFrm = useFormik<JobModel>({
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: randomNumber,
      giaTien: 0,
      nguoiTao: 1,
      hinhAnh:
        "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/217599616/original/8bb2d75e996fe9cae595f0de8a2c366e98a46256.jpg",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
    validationSchema: yup.object().shape({
      maChiTietLoaiCongViec: yup
        .string()
        .required("ID cannot be blank")
        .matches(/^\d+$/, "Must Contain Number"),

      tenCongViec: yup
        .string()
        .required("Job Name cannot be blank")
        .matches(
          /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
          "Enter valid name !"
        ),
      giaTien: yup
        .string()
        .required("Price cannot be blank")
        .matches(/^\d+$/, "Must Contain Number"),
      moTa: yup.string().required("Job Decription cannot be blank"),
      moTaNgan: yup.string().required("Short Decription cannot be blank"),
    }),
    onSubmit: (values: JobModel) => {
      const actionApi = postJobAsync(values);
      dispatch(actionApi);
      console.log(values);
    },
  });
  useEffect(() => {
    setRows(arrJob);
  }, [arrJob]);
  useEffect(() => {
    const actionJobAPI = getJobAsync();
    dispatch(actionJobAPI);
  }, []);
  return (
    <Box>
      <Box py={3}>
        <Button onClick={handleOpen}>Thêm Công Việc</Button>
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
                    Adding new job
                  </Typography>
                </Box>
                <Box pt={3}>
                  <form onSubmit={addjobFrm.handleSubmit}>
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
                              label="Job ID"
                              name="maChiTietLoaiCongViec"
                              type="number"
                              onBlur={addjobFrm.handleBlur}
                              onChange={addjobFrm.handleChange}
                            />
                          </FormControl>
                          {addjobFrm.errors.maChiTietLoaiCongViec && (
                            <p
                              style={{ color: "red", margin: "5px 0px 0 0" }}
                              className="text text-danger"
                            >
                              (*) {addjobFrm.errors.maChiTietLoaiCongViec}
                            </p>
                          )}
                        </Box>
                        <Box pt={2}>
                          <FormControl fullWidth>
                            <TextField
                              fullWidth
                              label="Job Name"
                              name="tenCongViec"
                              onBlur={addjobFrm.handleBlur}
                              onChange={addjobFrm.handleChange}
                            />
                          </FormControl>
                          {addjobFrm.errors.tenCongViec && (
                            <p
                              style={{ color: "red", margin: "5px 0px 0 0" }}
                              className="text text-danger"
                            >
                              (*) {addjobFrm.errors.tenCongViec}
                            </p>
                          )}
                        </Box>
                        <Box pt={2}>
                          <FormControl fullWidth>
                            <TextField
                              fullWidth
                              label="Star Rate"
                              name="saoCongViec"
                              select
                              defaultValue="1"
                              onBlur={addjobFrm.handleBlur}
                              onChange={addjobFrm.handleChange}
                            >
                              {currencies.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </FormControl>
                          {addjobFrm.errors.saoCongViec && (
                            <p
                              style={{ color: "red", margin: "5px 0px 0 0" }}
                              className="text text-danger"
                            >
                              (*) {addjobFrm.errors.saoCongViec}
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
                              label="Price"
                              name="giaTien"
                              type="number"
                              id="outlined-select-currency"
                              onBlur={addjobFrm.handleBlur}
                              onChange={addjobFrm.handleChange}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    $
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </FormControl>
                          {addjobFrm.errors.giaTien && (
                            <p
                              style={{ color: "red", margin: "5px 0px 0 0" }}
                              className="text text-danger"
                            >
                              (*) {addjobFrm.errors.giaTien}
                            </p>
                          )}
                        </Box>

                        <Box
                          sx={{ paddingRight: { md: "90px", xs: "0px" } }}
                          pt={2}
                        >
                          <FormControl fullWidth>
                            <TextField
                              fullWidth
                              label="Decription"
                              name="moTa"
                              onBlur={addjobFrm.handleBlur}
                              onChange={addjobFrm.handleChange}
                            />
                          </FormControl>
                          {addjobFrm.errors.moTa && (
                            <p
                              style={{ color: "red", margin: "5px 0px 0 0" }}
                              className="text text-danger"
                            >
                              (*) {addjobFrm.errors.moTa}
                            </p>
                          )}
                        </Box>
                        <Box
                          sx={{ paddingRight: { md: "90px", xs: "0px" } }}
                          pt={2}
                        >
                          <FormControl fullWidth>
                            <TextField
                              fullWidth
                              label="Short Decription"
                              name="moTaNgan"
                              onBlur={addjobFrm.handleBlur}
                              onChange={addjobFrm.handleChange}
                            />
                          </FormControl>
                          {addjobFrm.errors.moTaNgan && (
                            <p
                              style={{ color: "red", margin: "5px 0px 0 0" }}
                              className="text text-danger"
                            >
                              (*) {addjobFrm.errors.moTaNgan}
                            </p>
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Box py={2}>
                      <Button type="submit" variant="contained" size="large">
                        Submit
                      </Button>
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
                pageSize: 5,
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

export default TableJob;
