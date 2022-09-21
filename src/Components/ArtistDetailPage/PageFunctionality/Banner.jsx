import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "@mui/material";

const useStyles = createUseStyles({
  title: {
    fontWeight: "bold",
    fontSize: "4em",
    float: "left",
  },
});

const ArtistBanner = (props) => {
  const { banner, name } = props;

  const classes = useStyles();

  return (
    <>
      {banner ? (
        <img src={banner} width="100%" />
      ) : (
        <Typography gutterBottom className={classes.title}>
          {name}
        </Typography>
      )}
    </>
  );
};

export default ArtistBanner;
