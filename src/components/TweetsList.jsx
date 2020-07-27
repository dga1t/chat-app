import React from 'react';
import Tweet from './Tweet'
import { Container } from '@material-ui/core';


const TweetsList = (props) => {

  const { tweets } = props;

  return (
    <Container disableGutters={true}>
      {tweets.map(tweet =>
              <Tweet
                key={tweet.id}
                tweet={tweet}
              />
            )}
    </Container>
  )
}

export default TweetsList