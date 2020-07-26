import React from 'react';
import { Card, Typography } from '@material-ui/core';


const Tweet = (props) => {

  const { id, text } = props;
  const tweetTime = new Date(parseInt(id))

  return (
  <Card>
    <Typography>{"Joe Rogan"} {tweetTime.toISOString()}</Typography>
    <Typography>{text}</Typography>
  </Card>
  )
}

export default Tweet