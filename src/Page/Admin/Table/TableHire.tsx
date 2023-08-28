import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../Services/redux/configStore";
import {
  deleteJobHireAsync,
  getJobHireAsync,
} from "../../../Services/redux/reducers/AdminReducer/adminReducer";

type Props = {};

function TableHire({}: Props) {
  const arrHire = useSelector((state: RootState) => state.adminReducer.arrHire);
  const [rows, setRows] = useState(arrHire);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    const actionHireAPI = getJobHireAsync();
    dispatch(actionHireAPI);
  }, []);
  useEffect(() => {
    setRows(arrHire);
  }, [arrHire]);
  const deleteHireJob = (id: any) => {
    const ActionDeleteAPI = deleteJobHireAsync(id);
    dispatch(ActionDeleteAPI);
  };
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
