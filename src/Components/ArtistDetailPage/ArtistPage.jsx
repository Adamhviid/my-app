import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

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
  }, []);

  async function fetchDetails(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/search/artist/" + artistName
    );
    const tmpArray = [];
    data.artists.map((obj) => tmpArray.push(obj));
    setId(tmpArray[0].idArtist);
    setName(tmpArray[0].strArtist);
    setBornYear(tmpArray[0].intBornYear);
    setGender(tmpArray[0].strGender);
    setCountry(tmpArray[0].strCountry);
    setCountryCode(tmpArray[0].strCountryCode);
    setLabel(tmpArray[0].strLabel);
    setThumbnail(tmpArray[0].strArtistThumb);
    setBanner(tmpArray[0].strArtistBanner);
    setBiography(tmpArray[0].strBiographyEN);
  }

  async function fetchAlbums(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/search/albums/" + artistName
    );
    const tmpArray = [];
    data.album.map((obj) => tmpArray.push(obj));
    setAlbums(tmpArray);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <ArtistBanner banner={banner} name={name} />

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
          <ArtistAlbums albums={albums} />
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
