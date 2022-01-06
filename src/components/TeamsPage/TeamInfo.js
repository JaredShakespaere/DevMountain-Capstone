import React from "react";
import '../../styles/TeamsPage/TeamInfo.css'

function TeamInfo({ fullName, shortName, city }) {
	return (
		<div className='team-info-outer-container'>
			<div className='team-info-container'>
				<h3 className='team-info'>
					{fullName}
					<br></br>
					{shortName}
					<br></br>
					City: {city}
				</h3>
			</div>
		</div>
	);
}

export default TeamInfo;