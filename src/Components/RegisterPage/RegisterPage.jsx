import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Button, Typography, Divider, Grid, TextField } from "@mui/material";
import axios from "axios";

import PageTemplate from "../Common/PageTemplate";

const useStyles = createUseStyles({
  button: {
    background: "#3B719F",
  },
});

function RegisterPage() {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    await axios.post("http://localhost:3001/auth/register", {
      email: email.toLowerCase(),
      password: password,
    });
    window.location.href = "/login";
  };

  return (
    <div className={classes.container}>
      <PageTemplate title="Register" subtitle="registering an account" />
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
