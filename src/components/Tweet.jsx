import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'


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