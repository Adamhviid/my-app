import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  button: {
    background: "#3B719F",
  },
});

function SearchArtist() {
  const classes = useStyles();
  const [artist, setArtist] = useState("");

  const artistLink = "/artist/" + artist;

  const onFormSubmit = (e) => {
    e.preventDefault();
    // send state to server with e.g. `window.fetch`
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography variant="h5" gutterBottom>
              How about searching for an artist?
            </Typography>
          </Grid>
          <Grid item md={10}>
            <TextField
              fullWidth
              required
              label="Artist"
              variant="outlined"
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
            />
          </Grid>
          <Grid item md={2}>
            <Link to={artistLink}>
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
              >
                Search
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SearchArtist;
