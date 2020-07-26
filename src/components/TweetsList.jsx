import React from 'react';
import Tweet from './Tweet'
import { Container } from '@material-ui/core';


const TweetsList = (props) => {

  const { tweets } = props;
  
  const tweetsList = tweets.map(tweet => {
    return <Tweet key={tweet.id} text={tweet.text} id={tweet.id}/>
  })

  return (
    <Container disableGutters={true}>
      {tweetsList}
    </Container>
  )
}

export default TweetsList