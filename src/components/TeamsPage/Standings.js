import React from "react";
import SeasonInfo from "./SeasonInfo";

function Standings({ standings }) {
	return (
		<div className="season-info-container">
			<SeasonInfo
				seasonYear={standings[0].seasonYear}
				win={standings[0].win}
				loss={standings[0].loss}
				winPercentage={standings[0].winPercentage}
			/>
		</div>
	);
}

export default Standings;