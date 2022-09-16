import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <div>
      <Grid container>
        <AppBar position="static">
          <Toolbar>
            <Grid item md={2}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My App
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Navbar;
