import React from "react";
import { AppBar, Grid, Toolbar, Typography, MenuItem } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  navBar: {
    background: "#3B719F",
    marginBottom: "50px",
  },
  links: {
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
});

function Navbar() {
  const classes = useStyles();
  const pages = [
    { label: "Artists", link: "/artists" },
    { label: "Songs", link: "/songs" },
    { label: "Albums", link: "/albums" },
  ];

  return (
    <div>
      <Grid container>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Grid item md={2}>
              <MenuItem>
                <Link to="/">
                  <Typography
                    variant="h5"
                    component="div"
                    className={classes.links}
                  >
                    My App
                  </Typography>
                </Link>
              </MenuItem>
            </Grid>
            {pages.map((page) => (
              <Link to={page.link}>
                <MenuItem key={page.label}>
                  <Typography textAlign="center" className={classes.links}>
                    {page.label}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Navbar;
