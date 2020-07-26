import React from 'react';
import TweetForm from './TweetForm';
import TweetsList from './TweetsList';
import Container from '@material-ui/core/Container';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    localStorage.tweets = JSON.stringify(this.state.tweets);
  }

  handleOnNewTweet(newTweet) {
    this.setState((state) => {
      return {
        tweets: [newTweet, ...state.tweets]
      }
    });
  }

  render() {
    return(
      <Container>
        <TweetForm onNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)} />
        <TweetsList tweets={this.state.tweets}/>
      </Container>
    )
  }
}

export default MainPage