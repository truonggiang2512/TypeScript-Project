import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { RootState } from "../../Services/redux/configStore";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
type Props = {};

function Loading({}: Props) {
  const isLoadingUser = useSelector(
    (state: RootState) => state.userReducer.isLoading
  );
  const isLoadingHome = useSelector(
    (state: RootState) => state.homeReducer.isLoading
  );
  const isLoadingProfile = useSelector(
    (state: RootState) => state.profileReducer.isLoading
  );
  const isLoadingSearch = useSelector(
    (state: RootState) => state.searchReducer.isLoading
  );
  const isLoadingMenu = useSelector(
    (state: RootState) => state.menuReducer.isLoading
  );
  const isLoadingJobType = useSelector(
    (state: RootState) => state.jobTypeReducer.isLoading
  );
  const isLoadingDetail = useSelector(
    (state: RootState) => state.detailReducer.isLoading
  );
  const isLoadingComment = useSelector(
    (state: RootState) => state.commentReducer.isLoading
  );
  const isLoadingHire = useSelector(
    (state: RootState) => state.hireJobReducer.isLoading
  );
  const isLoadingAdmin = useSelector(
    (state: RootState) => state.adminReducer.isLoading
  );
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 9999,
        background: "rgba(0,0,0,.5)",
        display:
          isLoadingUser ||
          isLoadingHome ||
          isLoadingProfile ||
          isLoadingSearch ||
          isLoadingMenu ||
          isLoadingJobType ||
          isLoadingDetail ||
          isLoadingComment ||
          isLoadingHire ||
          isLoadingAdmin
            ? "flex"
            : "none",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        top: 0,
        color: "#fff",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: isLoadingHire ? "flex" : "none" }}>
          <Typography variant="h5">Hiring.......</Typography>
        </Box>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default Loading;
