import React, { Component } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
  CircularProgress,
  Alert,
  Backdrop,
} from "@mui/material";

import styles from "./LoginCSS.js";
import LoginIllustration from "../../../Assets/Illustrations/login.svg";
import Logo from "../../../Assets/Illustrations/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      isLoading: false,
      isError: false,
    };
  }

  handleChange(field, e) {
    if (field === "email") {
      var re = /\S+@\S+\.\S+/;
      this.setState({ isEmailValid: re.test(e.target.value) });
    } else if (field === "password") {
      this.setState({ isPasswordValid: e.target.value.length >= 8 });
    }
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Container sx={styles.container}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <img style={styles.img} src={LoginIllustration} alt="Login" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={styles.heading} align="center">
              Login to Upskill !
            </Typography>

            <img style={styles.logo} src={Logo} alt="Logo" />

            <Container sx={styles.fields}>
              {this.state.isError && (
                <Alert severity="error">
                  Your email and password do not match. <br />
                  Please try again!
                </Alert>
              )}
              <TextField
                id="outlined-basic"
                fullWidth
                label="Email"
                error={!this.state.isEmailValid && this.state.email}
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                sx={styles.field}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                type="password"
                label="Password"
                error={!this.state.isPasswordValid && this.state.password}
                variant="outlined"
                value={this.state.password}
                onChange={this.handleChange.bind(this, "password")}
                sx={styles.field}
              />
              <Typography sx={styles.subtext}>
                Must be 8 characters atleast
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item xs={4}>
                  <Link sx={styles.links} underline="none" href="/register">
                    Sign Up?
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link
                    sx={styles.links}
                    underline="none"
                    href="/forgetPassword"
                  >
                    Forget Password?
                  </Link>
                </Grid>
              </Grid>

              <Button
                disabled={
                  !(this.state.isEmailValid && this.state.isPasswordValid)
                }
                sx={styles.btn}
                variant="contained"
                size="large"
                fullWidth
              >
                Sign In
              </Button>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={this.state.isLoading}
              >
                <CircularProgress color="primary" />
              </Backdrop>
              <Typography sx={styles.subtext} align="center">
                @2021 All Right Reserved
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
