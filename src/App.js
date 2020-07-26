import React from 'react';
import theme from './theme'
import MainPage from './components/MainPage'
import { ThemeProvider, Container, TextField } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <MainPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;