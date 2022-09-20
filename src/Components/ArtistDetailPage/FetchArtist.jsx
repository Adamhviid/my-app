import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ArtistDetailPage from "./ArtistDetailPage";
import ArtistBiography from "./PageFunctionality/ArtistBiography";

function FetchArtist() {
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
  const [biography, setBiography] = useState("");

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

  return (
    <div>
      <ArtistDetailPage
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
      <ArtistBiography biography={biography} name={name} />
    </div>
  );
}

export default FetchArtist;
