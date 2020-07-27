import React from 'react';
import { Card, Typography } from '@material-ui/core';


const Tweet = (props) => {

  const { tweet } = props;

  return (
  <Card>
    <Typography>{tweet.userName} {tweet.date}</Typography>
    <Typography>{tweet.content}</Typography>
  </Card>
  )
}

export default Tweet