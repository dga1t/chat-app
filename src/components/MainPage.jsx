import React from 'react';
import TweetForm from './TweetForm';
import TweetsList from './TweetsList';
import User from './UserPage';
import { getTweets, addTweet } from '../lib/api';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false
    }
  }

  componentDidMount() {
    this.fetchTweets();
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
    return (
      <Router>
        <Container maxWidth="md">
          <AppBar position="static">
            <Typography variant="h6" color="inherit"><Link to="/">Home</Link></Typography>
            <Typography variant="h6" color="inherit"><Link to="/user">Profile</Link></Typography>
          </AppBar>
          <Container maxWidth="sm">
            <Switch>
              <Route exact path="/">
                <TweetForm onNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)} />
                { loading && <CircularProgress />}
                <TweetsList tweets={this.state.tweets}/>
              </Route>
              <Route path="/user">
                <User />
              </Route>
            </Switch>
          </Container>
        </Container>
      </Router>
    )
  }
}

export default MainPage