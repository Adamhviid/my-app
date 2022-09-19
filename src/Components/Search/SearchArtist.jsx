import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    background: "#114511",
  },
});

function SearchArtist() {
  const classes = useStyles();
  const [artist, setArtist] = useState("");
  const [fetchedData, setFetchedData] = useState("no api called");

  const handleSubmit = (event) => {
    fetchData(artist);
    event.preventDefault();
  };

  async function fetchData(artist) {
    const { data } = await axios.get("http://localhost:3001/search/" + artist);
    console.log("searched");
    setFetchedData(data);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h5" gutterBottom>
            How about searching for an artist
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
          <Button
            disableElevation
            variant="contained"
            type="submit"
            className={classes.button}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {fetchedData}
    </div>
  );
}

export default SearchArtist;
