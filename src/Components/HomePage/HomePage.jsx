import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";

import SearchArtist from "../SearchArtist/";
import PageTemplate from "../Common/PageTemplate";

const useStyles = createUseStyles({});

function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "My App - Home";
  }, []);

  return (
    <div className={classes.background}>
      <PageTemplate title="App" subtitle="searching for an artist" />
      <SearchArtist />
    </div>
  );
}

export default HomePage;
