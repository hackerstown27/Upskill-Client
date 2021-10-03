import React, { Component } from "react";
import { Grid } from "@mui/material";
import styles from "./HomeCSS";
import Greet from "./Greet/Greet";
import CourseDetails from "./CourseDetails/CourseDetails";
import MyCourses from "./MyCourses/MyCourses";
import Stats from "./Stats/Stats";

class Home extends Component {
  render() {
    return (
      <Grid
        sx={styles.container}
        container
        spacing={3}
        justifyContent="space-between"
      >
        <Grid item xs={6}>
          <Greet />
          <MyCourses />
        </Grid>
        <Grid item xs={6}>
          <CourseDetails />
          <Stats />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
