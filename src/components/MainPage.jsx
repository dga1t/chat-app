import React from 'react';
import TweetForm from './TweetForm';
import TweetsList from './TweetsList';
import User from './UserPage';
import { getTweets, addTweet } from '../lib/api';
import MyContext from '../context';

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
      loading: false,
      onNewTweet: newTweet => this.handleOnNewTweet(newTweet)
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
    return (
      <Router>
        <MyContext.Provider value={this.state}>
          <Container maxWidth="md">
            <AppBar position="static">
              <Typography variant="h6" color="inherit"><Link to="/">Home</Link></Typography>
              <Typography variant="h6" color="inherit"><Link to="/user">Profile</Link></Typography>
            </AppBar>
            <Container maxWidth="sm">
              <Switch>
                <Route exact path="/">
                  <TweetForm />
                  { loading && <CircularProgress />}
                  <TweetsList />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
              </Switch>
            </Container>
          </Container>
        </MyContext.Provider>
      </Router>
    )
  }
}

export default MainPage