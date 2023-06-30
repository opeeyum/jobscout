import axios from "axios";
const apiUrl = 'https://api.jobscout.work';
// const apiUrl = 'http://localhost:3080';

const makeApiCall = (method, url, payload = null, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${apiUrl}${url}`,
      data: payload,
      headers,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("Error making API call:", error);
        reject(error);
      });
  });
};

export default makeApiCall;
