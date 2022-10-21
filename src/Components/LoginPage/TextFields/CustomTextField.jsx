import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

function CustomTextField(props) {
  const { type } = props;

  const [input, setInput] = useState();

  return (
    <div>
      <br />
      <TextField
        label={type}
        type={type}
        variant="outlined"
        onChange={(event) => setInput(event.target.value)}
      />
      <br />
    </div>
  );
}

export default CustomTextField;
