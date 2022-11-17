import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Button, Typography, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PageTemplate from "../Common/PageTemplate";

const useStyles = createUseStyles({
  button: {
    background: "#3B719F",
  },
});

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    document.title = "My App - Login";

    if (localStorage.getItem("JWT_TOKEN")) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    await axios
      .post("http://localhost:3001/auth/login", {
        email: email.toLowerCase(),
        password: password,
      })
      .then((res) => {
        localStorage.setItem("JWT_TOKEN", res.data.token);
        navigate("/profile");
      })
      .catch((res, err) => {
        console.log("failed to login user: " + res);
      });
  };

  return (
    <div>
      <PageTemplate title="Login" subtitle="logging in" />
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
            Log in
          </Button>
        </Grid>
        <br />
        <br />
        <Grid item md={12}>
          <Typography gutterBottom>
            Don't have an account yet?
            <br />
            <Link to="/register" key={"Register"}>
              Register here
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
