import React from "react";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Job from "../../../Component/Job/Job";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
type Props = {
  arrAllJob: [];
};
function Categories({ arrAllJob }: Props) {
  return (
    <Container sx={{ bgcolor: "background.joblist" }} maxWidth="xl">
      <Box className="categories-content">
        <Box>
          <Box py={3}>
            <Typography variant="h3"> Job Categories</Typography>
          </Box>
          <Grid container spacing={3} columns={{ xs: 4, sm: 12, md: 16 }}>
            {arrAllJob.map((item, key) => {
              return (
                <Grid item xs={4} key={key}>
                  <Job arrJob={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Categories;
