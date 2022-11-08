import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'

function PageTemplate(props) {
  const {
    title,
    subtitle,
  } = props;

  return (
    <div>
      <Typography variant="h3" component="div" gutterBottom>
        Welcome to My {title}!
      </Typography>
      <Divider variant="middle" style={{ paddingBottom: "20px" }} />
      <br />
      <Grid item md={12}>
        <Typography variant="h5">How about {subtitle}?</Typography>
      </Grid>
      <br />
    </div>
  )
}

export default PageTemplate