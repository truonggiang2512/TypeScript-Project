import React, { useEffect, useState } from "react";
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
import {
  ContentState,
  deleteJobTypeAsync,
  getJobTypeAsync,
} from "../../../Services/redux/reducers/AdminReducer/adminReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../Services/redux/configStore";
type Props = {};

function TableJobType({}: Props) {
  const arrJobType = useSelector(
    (state: RootState) => state.adminReducer.arrJobType
  );
  const [rows, setRows] = useState(arrJobType);
  const dispatch: DispatchType = useDispatch();
  const deleteHireJob = (id: any) => {
    const ActionDeleteAPI = deleteJobTypeAsync(id);
    dispatch(ActionDeleteAPI);
  };
  useEffect(() => {
    setRows(arrJobType);
  }, [arrJobType]);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "tenLoaiCongViec",
      headerName: "Type of Job",
      width: 250,
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

  useEffect(() => {
    const actionJobTypeAPI = getJobTypeAsync();
    dispatch(actionJobTypeAPI);
  });
  return (
    <Box>
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

export default TableJobType;
