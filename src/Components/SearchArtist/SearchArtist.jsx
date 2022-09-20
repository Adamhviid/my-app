import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  button: {
    background: "#114511",
  },
});

function SearchArtist() {
  const classes = useStyles();
  const [artist, setArtist] = useState("");

  const artistLink = "/artist/" + artist;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h5" gutterBottom>
            How about searching for an artist?
          </Typography>
        </Grid>
        <Grid item md={10}>
          <TextField
            required
            fullWidth
            label="Artist"
            variant="outlined"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </Grid>
        <Grid item md={2}>
          <Link to={artistLink}>
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
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
