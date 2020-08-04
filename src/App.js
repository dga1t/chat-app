import React from 'react';
import theme from './theme'
import MainPage from './components/MainPage'
import firebase from 'firebase';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

const firebaseConfig = {
  apiKey: "AIzaSyDB6kvgVEyW7hO_bZnQMYsvR0_sbE3hI20",
  authDomain: "omgtweeter.firebaseapp.com",
  databaseURL: "https://omgtweeter.firebaseio.com",
  projectId: "omgtweeter",
  storageBucket: "omgtweeter.appspot.com",
  messagingSenderId: "825490351787",
  appId: "1:825490351787:web:2756e3822eef867ee9f9ee"
};

function App() {

  firebase.initializeApp(firebaseConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
