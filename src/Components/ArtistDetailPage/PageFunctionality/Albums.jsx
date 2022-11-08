import React, { useState, useEffect } from "react";
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

  const [showDots, setShowDots] = useState(false);
  const [hideArrow, setHideArrow] = useState(true);
  const [numbOfRows, setNumbOfRows] = useState(1);

  useEffect(() => {
    if (albums.length > 5) {
      setShowDots(true);
      setHideArrow(false);
      setNumbOfRows(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums]);

  function handleOnClick(value) {
    console.log(value);
  }

  return (
    <div>
      {albums ? (
        <div>
          <br />
          <Carousel
            cols={5}
            rows={numbOfRows}
            gap={20}
            showDots={showDots}
            hideArrow={hideArrow}
            loop
            dotColorActive="#3B719F"
          >
            {albums.map((item, index) => (
              <Carousel.Item key={index}>
                <Paper elevation={12}>
                  <Card
                    sx={{ maxWidth: 200 }}
                    onClick={() => handleOnClick(item.idAlbum)}
                    className={classes.card}
                  >
                    <CardMedia
                      component="img"
                      image={item.strAlbumThumb}
                      alt="Paella dish"
                      type="image/webp"
                      loading="lazy"
                    />
                  </Card>
                </Paper>
                <br />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default ArtistAlbums;
