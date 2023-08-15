import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ContentState } from "../../../Services/redux/reducers/AdminReducer/adminReducer";
import { useSelector } from "react-redux";
import { RootState } from "../../../Services/redux/configStore";
type Props = {};
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
];

function TableJob({}: Props) {
  const arrJob = useSelector((state: RootState) => state.adminReducer.arrJob);
  return (
    <Box>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={arrJob}
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
