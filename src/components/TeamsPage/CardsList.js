import React from 'react';
import TeamCard from './TeamCard';
import { nbaTeamsData } from './NbaTeamsData';
import '../../styles/TeamsPage/CardsList.css'



function CardsList(props) {
	return (
		<div className='full-card-list'>
			<div className='row'>
				{nbaTeamsData.map((teams) => {
					const { city, fullName, logo, shortName, teamId, standings } = teams;

					

					return (
						<div key={teamId} className='fullCard'>
							<TeamCard
								fav={props.fav}
								setFav={props.setFav}
								city={city}
								fullName={fullName}
								logo={logo}
								shortName={shortName}
								standings={standings}
								teamId={teamId}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CardsList;