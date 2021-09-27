import React from "react";
import Sidenav from "../Sidebar/Sidenav";
import { Grid } from "@mui/material";

const Course = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={6}>
          <Sidenav />
        </Grid>
        <Grid xs={6}>
          <h1>Course</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Course;
