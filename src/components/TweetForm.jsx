import React from 'react';
import MyContext from '../context';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

export const useStyles = theme => ({
  inputForm: {
    marginTop: 15,
    marginBottom: 10
  }
});

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetText: ''
    }
  }

  static contextType = MyContext;

  handleOnTweetTextChange(event) {
    this.setState({ tweetText: event.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.context.onNewTweet({
      content: this.state.tweetText,
      userName: JSON.parse(localStorage.getItem( 'userName' )),
      date: new Date().toISOString()
    });
    this.setState({ tweetText: '' })
  }

  render() {
    const { classes } = this.props;

    return (
      <MyContext.Consumer>
        {({ onSubmit }) => (
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <TextField
              className={classes.inputForm}
              id="outlined-multiline-static"
              label="Enter ur tweet"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
              onChange={(event) => this.handleOnTweetTextChange(event)}
              InputProps={{
                maxLength: 2,
                endAdornment:
                  <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                  >Add</Button>
              }}
              inputProps={{
                maxLength: 140,
              }}
            />       
          </form>
        )}
      </MyContext.Consumer>
    )
  }
}

TweetForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(TweetForm);