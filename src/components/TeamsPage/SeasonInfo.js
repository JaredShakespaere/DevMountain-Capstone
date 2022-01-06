import React from "react";
import '../../styles/TeamsPage/SeasonInfo.css'

function SeasonInfo({ seasonYear, win, loss, winPercentage }) {
	return (
		<span className="inner-season-info">
			Season: {seasonYear} Wins: {win} Losses: {loss} Win Percentage:
			{winPercentage}
		</span>
	);
}

export default SeasonInfo;