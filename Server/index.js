const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function searchArtist(artist) {
  app.get("/test", (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://theaudiodb.p.rapidapi.com/search.php',
      params: { s: artist },
      headers: {
        'X-RapidAPI-Key': 'c0092b6902mshb5ed672ba017d6fp190826jsn09c53c7e81a9',
        'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      res.json({ Artist: response.data });
    }).catch(function (error) {
      console.error(error);
    });
  })
}

