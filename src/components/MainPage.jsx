import React from 'react';
import TweetForm from './TweetForm';
import TweetsList from './TweetsList';
import User from './UserPage';
import MyContext from '../context';
//import { getTweets, addTweet } from '../lib/api';

import firebase from 'firebase';
import 'firebase/firestore';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export const useStyles = theme => ({
  topbar: {
    borderRadius: 5,
  },
});

firebase.initializeApp({
  apiKey: "AIzaSyC5PUn8wCin7xFwhZx8aRVDPhCYLqWNrac",
  authDomain: "chatapp-685f0.firebaseapp.com",
  projectId: "chatapp-685f0",
  storageBucket: "chatapp-685f0.appspot.com",
  messagingSenderId: "567476716691",
  appId: "1:567476716691:web:30c2d1ba9821cc80a63966"
});

const db = firebase.firestore();

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      onNewTweet: newTweet => this.handleOnNewTweet(newTweet)
    }
  }

  componentDidMount() {
    this.fetchTweets();
  }

  fetchTweets() {
    this.setState({ loading: true });
    db.collection("tweets").get().then(querySnapshot => {
      console.log(querySnapshot);
      const twts = querySnapshot.docs.map(doc => doc.data());
      console.log(twts);
      this.setState({tweets: twts, loading: false });
    })
  }

  handleOnNewTweet(newTweet) {
    db.collection("tweets").add(newTweet)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { loading } = this.state;
    const { classes } = this.props;
  
    return (
      <Router>
        <MyContext.Provider value={this.state}>
          <Container maxWidth="md">
            <AppBar position="static" className={classes.topbar}>
              <Container>
                <Button component={Link} to={'/'} color="white">Home</Button>
                <Button component={Link} to={'/user'} color="white">Login</Button>
              </Container>
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

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(MainPage);
