import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const ArtistDetailPage = (props) => {
  const { name, bornYear, gender, country, countryCode, label, thumbnail } =
    props;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Who is {name}
          </Typography>
          <CardMedia
            component="img"
            /* height="194" */
            image={thumbnail}
            alt="artistThumbnail"
          />
          <Typography variant="h7" gutterBottom>
            Born: {bornYear}
            <br />
            Gender: {gender}
            <br />
            Country: {country} ({countryCode})
            <br />
            Label: {label}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtistDetailPage;
