const axios = require('axios');
const baseUrl = require('./config').baseUrl;

const getPlayerById = Id => {
  axios.get(`players/${Id}`, {
    baseURL: baseUrl,
  }).then(res => {
    console.log(res);
    return res;
  }).catch(err => {
    console.log(err.message);
  });
}

module.exports = getPlayerById;