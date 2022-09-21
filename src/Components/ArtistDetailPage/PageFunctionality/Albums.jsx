import React from "react";
import { Card, CardMedia, Paper } from "@mui/material";
import Carousel from "react-grid-carousel";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    cursor: "pointer",
  },
});

const ArtistAlbums = (props) => {
  const { albums } = props;
  const classes = useStyles();

  function handleOnClick(value) {
    console.log(value);
  }

  return (
    <div>
      <Carousel
        cols={5}
        rows={2}
        gap={20}
        showDots
        loop
        dotColorActive="#114511"
      >
        {albums.map((item, index) => (
          <Carousel.Item key={index}>
            <Paper variant="outlined" elevation={12}>
              <Card
                sx={{ maxWidth: 200 }}
                onClick={() => handleOnClick(item.idAlbum)}
                className={classes.card}
              >
                <CardMedia
                  component="img"
                  image={item.strAlbumThumb}
                  alt="Paella dish"
                />
              </Card>
            </Paper>
            <br />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ArtistAlbums;
