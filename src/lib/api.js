import axios from 'axios';

const baseUrl = 'https://fullstack-web-course.ew.r.appspot.com/tweet';

export function getTweets() {
  return axios.get(`${baseUrl}`);
}

export function addTweet(tweet) {
  return axios.post(`${baseUrl}`, tweet);
}