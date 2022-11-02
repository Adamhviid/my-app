import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Typography, Divider } from "@mui/material";

import SearchArtist from "../SearchArtist/";

const useStyles = createUseStyles({});

function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "My App - Home";
  }, []);

  return (
    <div className={classes.background}>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome to My App!
      </Typography>
      <Divider variant="middle" style={{ paddingBottom: "20px" }} />
      <br />
      <SearchArtist />
    </div>
  );
}

export default HomePage;
