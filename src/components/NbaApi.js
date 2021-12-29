export default function NbaApi() {
	fetch('https://api-nba-v1.p.rapidapi.com/teams/league/standard', {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
			'x-rapidapi-key': '04ae5e1002msh74ff5480ca1af46p132c28jsn451192ec026b',
		},
	})
		.then((res) => {
			return res.json();
		}, [])
		.then((data) => {
			const someData = Object.values(data).map((select) => {
				(select.teams.map((innerSelect) => {
						if (innerSelect.nbaFranchise > 0) {
							console.log(innerSelect.fullName);
						}
					}, [])
				);
			}, []);
		})
		.catch((err) => {
			console.error(err);
		});
}
