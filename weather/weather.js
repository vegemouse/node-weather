const request = require('request');

const getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/64926387f2cfb58622f8718514242cea/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(body.currently.temperature);
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
