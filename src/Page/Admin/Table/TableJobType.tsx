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
    field: "tenLoaiCongViec",
    headerName: "Type of Job",
    width: 250,
    editable: true,
  },
];

function TableJobType({}: Props) {
  const arrJobType = useSelector(
    (state: RootState) => state.adminReducer.arrJobType
  );
  return (
    <Box>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={arrJobType}
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

export default TableJobType;
