import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Job from "../../Component/Job/Job";

type Props = {};

function Search({}: Props) {
  return (
    <Container sx={{ py: 5 }} maxWidth="lg">
      <Typography variant="h2">
        Results for <b>html</b>
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 16 }}>
        <Grid item xs={4}>
          <Job />
        </Grid>
        <Grid item xs={4}>
          <Job />
        </Grid>
        <Grid item xs={4}>
          <Job />
        </Grid>
        <Grid item xs={4}>
          <Job />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Search;
