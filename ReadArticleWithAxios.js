const axios = require('axios');
const { HEADERS, COOKIES, BASE_URL, EMAIL, PASSWORD } = require('./config'); // Assuming config.js is present in the same directory

let data = '{"userId":114862963,"courseId":"jigZGJrqEey10AoWlnmjtw","itemId":"VCB4h"}';

let headers = {
  ...HEADERS,
  Cookie: Object.keys(COOKIES).map(key => `${key}=${COOKIES[key]}`).join("; ")
};

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.coursera.org/api/onDemandSupplementCompletions.v1',
  headers: headers,
  data: data
};

console.log(config);

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
