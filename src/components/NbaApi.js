var axios = require('axios').default;

var options = {
	method: 'GET',
	url: 'https://api-nba-v1.p.rapidapi.com/leagues/',
	headers: {
		'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
		'x-rapidapi-key': '04ae5e1002msh74ff5480ca1af46p132c28jsn451192ec026b',
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
