import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { Button, Typography, Divider, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = createUseStyles({
  button: {
    background: "#3B719F",
  },
});

function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    document.title = "My App - Login";
  }, []);

  return (
    <div className={classes.container}>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome to My Login!
      </Typography>
      <Divider variant="middle" style={{ paddingBottom: "20px" }} />
      <br />
      <Grid item md={12}>
        <Typography variant="h5">How about logging in?</Typography>
      </Grid>
      <br />
      <form
        onSubmit={() => {
          /*  handleSubmit(); */
        }}
      >
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item md={12}>
            <TextField
              label={"Email..."}
              type={"email"}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              label={"Password..."}
              type={"password"}
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
            >
              Log in
            </Button>
          </Grid>
          <br />
          <br />
          <Grid item md={12}>
            <Typography gutterBottom>
              Don't have an account yet?
              <Link to="/register" key={"Register"}>
                <a href="/register"> Register here</a>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
