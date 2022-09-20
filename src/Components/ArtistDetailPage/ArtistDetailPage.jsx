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
  title: {
    fontWeight: "bold",
    fontSize: "4em",
    float: "left",
  },
});

const ArtistDetailPage = (props) => {
  const {
    id,
    name,
    bornYear,
    gender,
    country,
    countryCode,
    label,
    thumbnail,
    banner,
    biography,
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          {banner ? (
            <img src={banner} width="100%" />
          ) : (
            <Typography gutterBottom className={classes.title}>
              {name}
            </Typography>
          )}
        </Grid>
        <Grid item md={2}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Who is {name}
              </Typography>
              <CardMedia
                component="img"
                height="194"
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
        </Grid>
      </Grid>
    </div>
  );
};

export default ArtistDetailPage;
