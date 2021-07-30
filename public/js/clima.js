import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/find',
  params: {
    q: 'london',
    cnt: '0',
    mode: 'null',
    lon: '0',
    type: 'link, accurate',
    lat: '0',
    units: 'imperial, metric'
  },
  headers: {
    'x-rapidapi-key': '41fb3fc56emsh58f627a7658f5a7p1893a3jsn7801cffc7134',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});