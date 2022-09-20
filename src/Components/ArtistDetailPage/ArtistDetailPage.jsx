import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

function ArtistDetailPage() {
  const { artistName } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    fetchData(artistName);
    document.title = "My App - " + artistName;
  }, []);

  async function fetchData(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/search/" + artistName
    );
    const tmpArray = [];
    data.artists.map((obj) => tmpArray.push(obj));
    setArtist(tmpArray[0]);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <img src={artist.strArtistThumb} width="200" height="200"/>
        </Grid>
        <Grid item md={4}>
          <Typography variant="h3" component="div" gutterBottom>
            {artist.strArtist}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Facts about {artist.strArtist}
              </Typography>
              <Typography variant="h7">
                Born: {artist.intBornYear}
                <br />
                Gender: {artist.strGender}
                <br />
                Country: {artist.strCountry} ({artist.strCountryCode})
                <br />
                Label: {artist.strLabel}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ArtistDetailPage;
