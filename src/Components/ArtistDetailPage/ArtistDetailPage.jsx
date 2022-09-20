import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtistDetailPage = () => {
  const { artist } = useParams();

  return <div>her bor {artist}</div>;
};

export default ArtistDetailPage;
