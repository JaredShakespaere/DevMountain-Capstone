import React from 'react';
// import Standings from './Standings';
import TeamInfo from './TeamInfo';
import TeamLogo from './TeamLogo';
import '../../styles/TeamsPage/TeamCard.css';

function TeamCard({ logo, fullName, shortName, city, standings, fav, setFav, teamId }) {
	const cardInfo = {
		logo,
		fullName,
		shortName,
		city,
		standings,
		teamId
	};

	function AddToFav(card) {
		let favCopy = fav;
		favCopy.push(card);
		setFav(favCopy);
		console.log(fav);
	}

	return (
		<div className='card-list-layout'>
			
				<TeamLogo logo={logo} fullName={fullName} />

				<TeamInfo fullName={fullName} shortName={shortName} city={city} />

				{/* <Standings standings={standings} /> */}
		
			<button
				onClick={() => {
					AddToFav(cardInfo);
					console.log(`${cardInfo.shortName} button clicked`);
				}}
				className='fav-btn'>
				ADD TO FAVORITES
			</button>
		</div>
	);
}

export default TeamCard;
