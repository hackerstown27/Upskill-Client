import React from "react";
import Sidenav from "../Sidebar/Sidenav";
import { Grid } from "@mui/material";


const Bookmark = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={6}>
          <Sidenav />
        </Grid>
        <Grid xs={6}>
          <h1>Bookmark</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bookmark;
