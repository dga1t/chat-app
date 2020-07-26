import React from 'react';
import { Card, Typography } from '@material-ui/core';


const Tweet = (props) => {

  const { text } = props;
  const d = new Date();

  return (
  <Card>
    <Typography>{"Joe Rogan"} {d.toISOString()}</Typography>
    <Typography>{text}</Typography>
  </Card>
  )
}

export default Tweet