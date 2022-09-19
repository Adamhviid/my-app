import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "@mui/material";

const useStyles = createUseStyles({});

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome to My App!
      </Typography>
    </div>
  );
}

export default HomePage;
