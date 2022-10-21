import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import ArtistDetails from "./PageFunctionality/Details";
import ArtistBiography from "./PageFunctionality/Biography";
import ArtistAlbums from "./PageFunctionality/Albums";
import ArtistBanner from "./PageFunctionality/Banner";

function ArtistPage() {
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
  }

  async function fetchAlbums(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/db/search/albums/" + artistName
    );
    setAlbums(data);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <ArtistBanner banner={banner} name={name} />
          <br />
          <br />
          <Typography variant="h5" gutterBottom>
            Albums
          </Typography>
          <ArtistAlbums albums={albums} />
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
    </div>
  );
}

export default ArtistPage;
