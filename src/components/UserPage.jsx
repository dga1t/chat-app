import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: JSON.parse(localStorage.getItem( 'userName' ))};

    this.handleOnUsernameChange = this.handleOnUsernameChange.bind(this);
    this.handleOnUsernameSave = this.handleOnUsernameSave.bind(this);
  }

  handleOnUsernameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleOnUsernameSave(event) {
    event.preventDefault();
    localStorage.setItem('userName', JSON.stringify(this.state.userName))
  }

  render() {
    return(
      <Container>
        <Typography>Profile</Typography>
        <form onSubmit={(event) => this.handleOnUsernameSave(event)}>
          <TextField 
          label="User name"
          required
          value={this.state.value}
          onChange={this.handleOnUsernameChange}
          />
          <Button
            variant="contained" 
            color="primary"
            type="submit"
          >Save</Button>
        </form>
      </Container>
    )
  }
}

export default User