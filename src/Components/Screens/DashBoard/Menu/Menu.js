import React, { Component } from "react";
import { Grid, Button } from "@mui/material";
import styles from "./MenuCSS";
import {
  HomeRounded,
  SearchRounded,
  LogoutRounded,
  AccountBoxRounded,
  ReceiptRounded,
  BookmarkAddRounded,
} from "@mui/icons-material";
import icon from "./favicon.svg";
import "./Menu.css";
class Menu extends Component {
  onClick(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div style={{position: "fixed"}}>
        <Grid
          sx={styles.container}
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid>
            <img src={icon} alt="icon" />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item className="item">
              <Button
                color="inherit"
                variant="text"
                onClick={this.onClick.bind(this, "./")}
              >
                <HomeRounded fontSize="large" color="inherit" />
              </Button>
            </Grid>
            <Grid item className="item">
              <Button
                color="inherit"
                variant="text"
                onClick={this.onClick.bind(this, "search")}
              >
                <SearchRounded fontSize="large" color="inherit" />
              </Button>
            </Grid>
            <Grid item className="item">
              <Button
                color="inherit"
                variant="text"
                onClick={this.onClick.bind(this, "badges")}
              >
                <ReceiptRounded fontSize="large" color="inherit" />
              </Button>
            </Grid>
            <Grid item className="item">
              <Button
                color="inherit"
                variant="text"
                onClick={this.onClick.bind(this, "bookmarks")}
              >
                <BookmarkAddRounded fontSize="large" color="inherit" />
              </Button>
            </Grid>
            <Grid item className="item">
              <Button
                color="inherit"
                variant="text"
                onClick={this.onClick.bind(this, "account")}
              >
                <AccountBoxRounded fontSize="large" color="inherit" />
              </Button>
            </Grid>
          </Grid>
          <Grid item className="item">
            <Button
              color="inherit"
              variant="text"
              onClick={this.onClick.bind(this, "logout")}
            >
              <LogoutRounded fontSize="large" color="inherit" />
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Menu;
