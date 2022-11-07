import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { Button, Typography, Divider, Grid, TextField } from "@mui/material";
import axios from "axios";

const useStyles = createUseStyles({
  button: {
    background: "#3B719F",
  },
});

function RegisterPage() {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    alert("You have successfully registered!" + email + password);
    const user = {
      email: email.toLowerCase(),
      password: password,
    };
    const jsonUser = JSON.stringify(user);
    return axios
      .post("http://localhost:3001/auth/register", {
        email: email.toLowerCase(),
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome to My Register!
      </Typography>
      <Divider variant="middle" style={{ paddingBottom: "20px" }} />
      <br />
      <Grid item md={12}>
        <Typography variant="h5">How about registering an account?</Typography>
      </Grid>
      <br />
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
            onClick={() => handleSubmit()}
          >
            Create account
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default RegisterPage;
