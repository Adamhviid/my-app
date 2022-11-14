import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, Grid, TextField } from "@mui/material";
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
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    document.title = "My App - Register";

    if (registered) {
      window.location.href = "/login";
    }
  }, [registered]);

  const handleSubmit = async (e) => {
    await axios
      .post("http://localhost:3001/auth/register", {
        email: email.toLowerCase(),
        password: password,
      })
      .then(() => {
        setRegistered(true);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
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
