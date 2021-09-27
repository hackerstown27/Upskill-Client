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

import styles from "./RegisterCSS.js";
import RegisterIllustration from "../../../Assets/Illustrations/register.svg";
import Logo from "../../../Assets/Illustrations/logo.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      isFirstNameValid: false,
      isLastNameValid: false,
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
    } else if (field === "firstName") {
      this.setState({ isFirstNameValid: e.target.value.length >= 1 });
    } else if (field === "lastName") {
      this.setState({ isLastNameValid: e.target.value.length > 0 });
    }
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Container sx={styles.container}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography sx={styles.heading} align="center">
              Register to Upskill !
            </Typography>
            <img style={styles.logo} src={Logo} alt="Logo" />

            <Container sx={styles.fields}>
              {this.state.isError && (
                <Alert severity="error">
                  Account already exists. <br />
                  Please try again with different email !
                </Alert>
              )}
              <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    sx={styles.field}
                    value={this.state.firstName}
                    onChange={this.handleChange.bind(this, "firstName")}
                    error={!this.state.isFirstNameValid}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    sx={styles.field}
                    value={this.state.lastName}
                    onChange={this.handleChange.bind(this, "lastName")}
                    error={!this.state.isLastNameValid}
                  />
                </Grid>
              </Grid>

              <TextField
                id="outlined-basic"
                fullWidth
                label="Email"
                variant="outlined"
                sx={styles.field}
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                error={!this.state.isEmailValid && this.state.email}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                sx={styles.field}
                value={this.state.password}
                onChange={this.handleChange.bind(this, "password")}
                error={!this.state.isPasswordValid && this.state.password}
              />
              <Typography sx={styles.subtext}>
                Must be 8 characters atleast
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item xs={4}>
                  <Link sx={styles.links} underline="none" href="/">
                    Sign In?
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link
                    sx={styles.links}
                    underline="none"
                    href="forgetPassword"
                  >
                    Forget Password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                sx={styles.btn}
                variant="contained"
                size="large"
                fullWidth
                disabled={
                  !(
                    this.state.isEmailValid &&
                    this.state.isPasswordValid &&
                    this.state.isFirstNameValid &&
                    this.state.isLastNameValid
                  )
                }
              >
                Sign Up
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
            </Container>
          </Grid>
          <Grid item xs={6}>
            <img style={styles.img} src={RegisterIllustration} alt="Sign Up" />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Register;
