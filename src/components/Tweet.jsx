import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    marginTop: 10
  },
  topContainer: {
    marginTop: 20,
    marginBottom: 10
  },
  bottomContainer: {
    marginBottom: 10
  },
  user: {
    display: 'inline',
    fontSize: 13,
    color: '#6C757D',
  },
  date: {
    display: 'inline',
    fontSize: 13,
    color: '#6C757D',
  },
  content: {
    fontSize: 15
  }
});


const Tweet = (props) => {

  const { tweet } = props;
  const classes = useStyles();

  return (
  <Card className={classes.card}>
    <Container className={classes.topContainer}>
      <Typography className={classes.user}>{tweet.userName}</Typography>
      <Typography className={classes.date}>{tweet.date}</Typography>
    </Container>
    <Container className={classes.bottomContainer}>
      <Typography className={classes.content}>{tweet.content}</Typography>
    </Container>
  </Card>
  )
}

export default Tweet