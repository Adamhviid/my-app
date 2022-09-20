import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ArtistDetailPage() {
  const { artistName } = useParams();
  const [Fetched, setFetched] = useState();

  useEffect(() => {
    fetchData(artistName);
    document.title = "My App - " + artistName 
  }, []);

  async function fetchData(artistName) {
    const { data } = await axios.get(
      "http://localhost:3001/search/" + artistName
    );
    setFetched(data.artists.map((obj) => obj.strArtist));
  }

  return <div>her bor {Fetched}</div>;
}

export default ArtistDetailPage;
