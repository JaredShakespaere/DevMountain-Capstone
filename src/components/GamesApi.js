import React from 'react'

 function GamesApi() {

     fetch('https://api-nba-v1.p.rapidapi.com/games/teamId/1', {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
					'x-rapidapi-key':
						'04ae5e1002msh74ff5480ca1af46p132c28jsn451192ec026b',
				},
			})
				.then((response) => {
					console.log(response.json());
				})
				.catch((err) => {
					console.error(err);
				});
    return (
        <div>
            
        </div>
    )
}

export default GamesApi;