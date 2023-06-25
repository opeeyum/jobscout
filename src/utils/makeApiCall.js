import axios from "axios";
// const apiUrl = 'http://13.200.99.228';
const apiUrl = 'http://localhost';

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
