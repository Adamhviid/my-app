const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const { ConstructionOutlined } = require("@mui/icons-material");

const corsOptions = {
  origin: PORT,
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/search/:artist", (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/search.php',
    params: { s: req.params.artist },
    headers: {
      'X-RapidAPI-Key': 'c0092b6902mshb5ed672ba017d6fp190826jsn09c53c7e81a9',
      'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    const data = res.json(response.data)
    console.log(data.artist[2])
  }).catch(function (error) {
    console.error(error);
  });
})


