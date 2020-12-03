import { createContext } from 'react';

const MyContext = createContext({
  tweets: [],
  onNewTweet: () => {}
}); 

export default MyContext;