import React from "react";
import { AppBar, Grid, Toolbar, Typography, MenuItem } from "@mui/material";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navBar: {
    background: "#114511",
    marginBottom: "50px",
  },
});

function Navbar() {
  const classes = useStyles();
  const pages = ["Artists", "Songs", "Albums", "Marketplace"];

  function handleOnClick(page) {
    console.log(page);
    /* TODO: routing to the different pages */
  }

  return (
    <div>
      <Grid container>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Grid item md={2}>
              <MenuItem onClick={() => handleOnClick("Home")}>
                <Typography variant="h5" component="div">
                  My App
                </Typography>
              </MenuItem>
            </Grid>
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleOnClick(page)}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Navbar;
