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
  const [token, setToken] = useState();

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
      <br/>
      <form
        onSubmit={() => {
          /* handleSubmit(); */
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
              Create account
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default RegisterPage;
