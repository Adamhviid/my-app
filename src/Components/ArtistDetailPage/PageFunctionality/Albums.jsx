import React from "react";

const ArtistAlbums = (props) => {
  const { albums } = props;
  return (
    <div>
      {albums.map(({ strAlbum, intYearReleased }) => (
        <p key={strAlbum}>
          {strAlbum} - {intYearReleased}
        </p>
      ))}
    </div>
  );
};

export default ArtistAlbums;
