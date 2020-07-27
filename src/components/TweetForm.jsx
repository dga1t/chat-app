import React from 'react';
import { TextField, Button } from '@material-ui/core';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetText: ''
    }
  }

  handleOnTweetTextChange(event) {
    this.setState({ tweetText: event.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onNewTweet({
      content: this.state.tweetText,
      userName: "dflow088",
      date: new Date().toISOString()
    });
    this.setState({ tweetText: '' })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <TextField
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
    )
  }
}

export default TweetForm