const axios = require('axios');
const baseUrl = require('./config').baseUrl;

/**
 * @params: persona name (string)
 */
const getHeroesByPlayer = id => {
  axios.get(`players/${id}/heroes`, {
    baseURL: baseUrl,
  }).then(res => {
    console.log(res);
    // for (let i of res.data[0]) {
    //   console.log(i.avatarfull); // how to index into the picture to be used for the FindByPersonaName component
    // }
    return res;
  }).catch(err => {
    console.log(err.message);
  });
}
// getHeroesByPlayer(108973831);
module.exports = getHeroesByPlayer;