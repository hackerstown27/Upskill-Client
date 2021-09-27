import React from "react";
import Sidenav from "../Sidebar/Sidenav";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="">
      <Grid container>
        <Grid xs={6}>
          <Sidenav />
        </Grid>
        <Grid xs={6}>
          <h1>Home</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
