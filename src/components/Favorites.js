import React from 'react';
import '../styles/Home.css';
// import { useUserAuth } from '../context/AuthContext';
import '../../src/styles/TeamBall.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function TeamTradingCard(props) {
	return props.fav.map((team) => {
		return (
			<div key={team.teamId} className='teamball'>
				<section className='stage'>
					<figure src={team.logo} className='ball'>
						<span className='shadow'></span>
						<img src={team.logo} alt='team-logo' />
					</figure>

					<div className='fav-data'>
						{team.shortName}
						<br />
						{`TEAM: ${team.fullName}`}
						<br />
						{`CITY: ${team.city}`}
						<br />
						{team.standings.map((season) => {
							return (
								
								<div key={season.seasonYear}>
									{`CONFERENCE: ${season.conference.name.toUpperCase()}`}
									<br />
									{`DIVISION: ${season.division.name.toUpperCase()}`}
									<br />
									<br />
									{`SEASON WINS: ${season.win}`}
									<br />
									{`SEASON WINS: ${season.loss}`}
									<br />
									{`WIN PERCENTAGE: ${season.winPercentage}`}
									{/* <FontAwesomeIcon className='delete-button' icon={faTrashAlt} /> */}
								</div>
							);
						})}
					</div>
				</section>
			</div>
		);
	});
}

function Favorites() {
	return <></>;
}

export default TeamTradingCard;

// const { user, logOut } = useUserAuth;

// const handleLogOut = async () => {
// 	try {
// 		await logOut();
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };

// export function GamesApi() {

//      fetch('https://api-nba-v1.p.rapidapi.com/games/teamId/1', {
// 				method: 'GET',
// 				headers: {
// 					'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
// 					'x-rapidapi-key':
// 						'04ae5e1002msh74ff5480ca1af46p132c28jsn451192ec026b',
// 				},
// 			})
// 				.then((response) => {
// 					console.log(response.json());
// 				})
// 				.then(data => {

// 				})
// 				.catch((err) => {
// 					console.error(err);
// 				});
//     return (
//         <div>

//         </div>
//     )
// }
