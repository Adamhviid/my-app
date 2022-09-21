import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";

const useStyles = createUseStyles({
  img: {
    borderRadius: "20%",
    width: "200px",
    height: "auto",
  },
});

const ArtistDetailPage = (props) => {
  const { name, bornYear, gender, country, countryCode, label, thumbnail } =
    props;

  const classes = useStyles();

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
