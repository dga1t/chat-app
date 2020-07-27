import React from 'react';
import TweetForm from './TweetForm';
import TweetsList from './TweetsList';
import { getTweets, addTweet } from '../lib/api';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false
    }
  }

  componentDidMount() {
    this.fetchTweets().then();
  }

  async fetchTweets() {
    this.setState({ loading: true });
    const response = await getTweets();
    const tweetsFromServer = response.data.tweets;
    this.setState({tweets: tweetsFromServer, loading: false });
  }

  async handleOnNewTweet(newTweet) {
    const response = await addTweet(newTweet);
  }

  render() {
    const { loading } = this.state;
    return(
      <Container>
        <TweetForm onNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)} />
        { loading && <CircularProgress />}
        <TweetsList tweets={this.state.tweets}/>
      </Container>
    )
  }
}

export default MainPage