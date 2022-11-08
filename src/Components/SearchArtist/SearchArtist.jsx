import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
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

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={10}>
          <TextField
            fullWidth
            required
            label="Name of artist here..."
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
    </div>
  );
}

export default SearchArtist;
