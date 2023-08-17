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
  updateUserAsync,
  User,
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
  useEffect(() => {
    const actionUserAPI = getUserAsync();
    dispatch(actionUserAPI);
  }, []);

  // const handleAddRow = async (newRow) => {
  //   try {
  //     const response = await axios.post("your_api_endpoint_here", newRow);
  //     const createdRow = response.data; // Assuming the API returns the new row data
  //     setRows((prevRows) => [...prevRows, createdRow]);
  //   } catch (error) {
  //     console.error("Error adding new row:", error);
  //   }
  // };
  return (
    <Box>
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
