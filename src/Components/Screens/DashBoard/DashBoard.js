import React, { Component } from "react";
import { Grid } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Badges from "./Badges/Badges";
import Bookmarks from "./Bookmarks/Bookmarks";
import Account from "./Account/Account";
import Logout from "./Logout/Logout";


class DashBoard extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={0.75}>
          <Menu {...this.props} />
        </Grid>
        <Grid item xs={11}>
            <Switch>
                <Route exact path="/dashboard/" component={Home} />
                <Route exact path="/dashboard/search" component={Search} />
                <Route exact path="/dashboard/badges" component={Badges} />
                <Route exact path="/dashboard/bookmarks" component={Bookmarks} />
                <Route exact path="/dashboard/account" component={Account} />
                <Route exact path="/dashboard/logout" component={Logout} />
            </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default DashBoard;
