import React, { useState, useEffect } from "react";
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
  profile: {
    float: "right",
  },
});

function Navbar() {
  const classes = useStyles();
  const pages = [
    { label: "Artists", link: "/artists" },
    { label: "Albums", link: "/albums" },
    { label: "Songs", link: "/songs" },
  ];

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (token) {
      setLoggedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Grid container>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Grid item md={2}>
              <MenuItem>
                <Link to="/" key={"Logo"}>
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
              <Grid item key={page.label}>
                <Link to={page.link}>
                  <MenuItem>
                    <Typography textAlign="center" className={classes.links}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                </Link>
              </Grid>
            ))}
            <Grid item md={10}>
              {loggedIn ? (
                <MenuItem className={classes.profile}>
                  <Link to="/profile" key={"Profile"}>
                    <Typography
                      variant="h5"
                      component="div"
                      className={classes.links}
                    >
                      My Profile
                    </Typography>
                  </Link>
                </MenuItem>
              ) : (
                <MenuItem className={classes.profile}>
                  <Link to="/login" key={"Login"}>
                    <Typography
                      variant="h5"
                      component="div"
                      className={classes.links}
                    >
                      Log in
                    </Typography>
                  </Link>
                </MenuItem>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Navbar;
