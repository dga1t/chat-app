import axios from 'axios';

const baseUrl = 'https://fullstack-web-course.ew.r.appspot.com/tweet';


export function getTweets() {
  return axios.get(`${baseUrl}`)
}
  
//   .catch(error => {
//     if (error.response) {
//       // Request made and server responded
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     };
//   })
// }

export function addTweet(tweet) {
  return axios.post(`${baseUrl}`, tweet)
}
  
//   .catch(error => {
//     if (error.response) {
//       // client received an error response (5xx, 4xx)
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // client never received a response, or request never left
//       console.log(error.request);
//     } else {
//       // anything else
//       console.log(" some other error -_- ");
//     }
//   })
// }
