import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { RootState } from "../../../Services/redux/configStore";
type Props = {};
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "maNguoiThue",
    headerName: "User ID",
    width: 150,
    editable: true,
  },
  {
    field: "maCongViec",
    headerName: "Job ID",
    width: 150,
    editable: true,
  },
  {
    field: "ngayThue",
    headerName: "Date",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "hoanThanh",
    headerName: "Mode",
    type: "number",
    width: 150,
    editable: true,
  },
];

function TableHire({}: Props) {
  const arrHire = useSelector((state: RootState) => state.adminReducer.arrHire);
  return (
    <Box>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={arrHire}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
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

export default TableHire;
