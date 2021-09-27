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

import styles from "./ForgetPasswordCSS.js";
import ForgetPasswordIllustration from "../../../Assets/Illustrations/forget.json";
import Logo from "../../../Assets/Illustrations/logo.png";

import LottieAnimation from "../../LottieAnimation/LottieAnimation";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isEmailValid: false,
      isLoading: false,
      isError: false,
      isSuccess: false,
    };
  }

  handleChange(field, e) {
    if (field === "email") {
      var re = /\S+@\S+\.\S+/;
      this.setState({ isEmailValid: re.test(e.target.value) });
    }
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Container sx={styles.container}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <LottieAnimation
              lotti={ForgetPasswordIllustration}
              height={500}
              width={500}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={styles.heading} align="center">
              Recover Your Account
            </Typography>
            <img style={styles.logo} src={Logo} alt="Logo" />

            <Container sx={styles.fields}>
              {this.state.isError && (
                <Alert severity="error">
                  Account does not exists. <br />
                  Please try again with different email !
                </Alert>
              )}
              {this.state.isSuccess && (
                <Alert severity="success">
                  Password sent to your email succesfully! <br />
                </Alert>
              )}
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
              <Typography sx={styles.subtext}>
                Password will be sent to your email id
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Link sx={styles.links} underline="none" href="/">
                    Sign In?
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={styles.links} underline="none" href="/register">
                    Sign Up?
                  </Link>
                </Grid>
              </Grid>
              <Button
                sx={styles.btn}
                variant="contained"
                size="large"
                fullWidth
                disabled={!this.state.isEmailValid}
              >
                Forget Password
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
        </Grid>
      </Container>
    );
  }
}

export default ForgetPassword;
