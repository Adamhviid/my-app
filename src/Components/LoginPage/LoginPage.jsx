import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, Typography, Divider, Grid } from "@mui/material";
import CustomTextField from "./TextFields/CustomTextField";

const useStyles = createUseStyles({
  button: {
    background: "#3B719F",
  },
});

function Login() {
  const classes = useStyles();

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
      <Grid container spacing={2} style={{ textAlign: "center" }}>
        <Grid item md={12}>
          <CustomTextField type={"email"} />
        </Grid>
        <Grid item md={12}>
          <CustomTextField type={"password"} />
        </Grid>
        <Grid item md={12}>
          <Button className={classes.button} variant="contained" type="submit">
            Log in
          </Button>
        </Grid>
        <br />
        <br />
        <Grid item md={12}>
          <Typography gutterBottom>
            Don't have an account yet? <a href="/register">Register here</a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
