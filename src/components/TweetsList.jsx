import React from 'react';
import Tweet from './Tweet'
import MyContext from '../context';

import Container from '@material-ui/core/Container';


const TweetsList = () => {

  return (
    <MyContext.Consumer>
      {({ tweets }) => (
        <Container disableGutters={true}>
          {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
        </Container>
      )}
    </MyContext.Consumer>
  )
}

export default TweetsList