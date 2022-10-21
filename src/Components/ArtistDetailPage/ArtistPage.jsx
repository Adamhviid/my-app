import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import BarLoader from "react-spinners/BarLoader";

import ArtistDetails from "./PageFunctionality/Details";
import ArtistBiography from "./PageFunctionality/Biography";
import ArtistAlbums from "./PageFunctionality/Albums";
import ArtistBanner from "./PageFunctionality/Banner";

const useStyles = createUseStyles({
  loader: {
    width: "50%",
    margin: "0 auto",
    backgroundColor: "#3B719F",
  },
});

function ArtistPage() {
  const classes = useStyles();
  const { artistName } = useParams();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [bornYear, setBornYear] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState();
  const [label, setLabel] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [banner, setBanner] = useState();
  const [biography, setBiography] = useState();
  const [albums, setAlbums] = useState([]);
  const [albumLoading, setAlbumLoading] = useState(true);
  const [artistLoading, setArtistLoading] = useState(true);

  useEffect(() => {
    fetchDetails(artistName);
    fetchAlbums(artistName);
    document.title = "My App - " + artistName;
  }, [artistName]);

  async function fetchDetails(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/db/search/artist/" + artistName
    );
    setId(data.idArtist);
    setName(data.strArtist);
    setBornYear(data.intBornYear);
    setGender(data.strGender);
    setCountry(data.strCountry);
    setCountryCode(data.strCountryCode);
    setLabel(data.strLabel);
    setThumbnail(data.strArtistThumb);
    setBanner(data.strArtistBanner);
    setBiography(data.strBiographyEN);
    setArtistLoading(false);
  }

  async function fetchAlbums(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/db/search/albums/" + artistName
    );
    setAlbums(data);
    setAlbumLoading(false);
  }

  return (
    <div>
      <BarLoader
        className={classes.loader}
        loading={artistLoading}
        width={"50%"}
      />
      {artistLoading === false ? (
        <Grid container spacing={2}>
          <Grid item md={12}>
            <ArtistBanner banner={banner} name={name} />
            <ArtistAlbums albums={albums} />
            <BarLoader
              className={classes.loader}
              loading={albumLoading}
              width={"50%"}
            />
          </Grid>

          {/* left collumn */}
          <Grid item md={6}>
            <ArtistDetails
              id={id}
              name={name}
              bornYear={bornYear}
              gender={gender}
              country={country}
              countryCode={countryCode}
              label={label}
              thumbnail={thumbnail}
              banner={banner}
            />
          </Grid>

          {/* Right collumn */}
          <Grid item md={6}>
            <ArtistBiography biography={biography} name={name} />
          </Grid>
        </Grid>
      ) : (
        <div>
          <h2>Fetching artist</h2>
        </div>
      )}
    </div>
  );
}

export default ArtistPage;
