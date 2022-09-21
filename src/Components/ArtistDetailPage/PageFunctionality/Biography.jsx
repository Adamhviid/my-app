import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ArtistBiography = (props) => {
  const { biography, name } = props;

  const [expanded, setExpanded] = useState(200);

  const handleExpandClick = () => {
    expanded == 200 ? setExpanded(1000) : setExpanded(200);
  };

  return (
    <div>
      <Card sx={{ maxHeight: expanded, maxWidth: 450 }}>
        <CardContent>
          <Typography
            color="text.secondary"
            gutterBottom
            onClick={() => handleExpandClick()}
          >
            {name + "'s biography"} <ExpandMoreIcon fontSize="small" />
          </Typography>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {biography}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtistBiography;
