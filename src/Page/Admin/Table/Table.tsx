import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import {
  ContentState,
  deleteUserAsync,
  getUserAsync,
} from "../../../Services/redux/reducers/AdminReducer/adminReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../Services/redux/configStore";
type Props = {};

function TableUser({}: Props) {
  const dispatch: DispatchType = useDispatch();
  const arrUser = useSelector((state: RootState) => state.adminReducer.arrUser);
  const [rows, setRows] = useState(arrUser);
  const deleteUser = (id: any) => {
    const ActionDeleteAPI = deleteUserAsync(id);
    dispatch(ActionDeleteAPI);
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
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
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
            <Button>Edit</Button>
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
  useEffect(() => {
    const actionUserAPI = getUserAsync();
    dispatch(actionUserAPI);
  }, []);

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

export default TableUser;
