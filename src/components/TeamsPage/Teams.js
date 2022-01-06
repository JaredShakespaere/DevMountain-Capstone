import React from 'react'
import CardsList from './CardsList';
import '../../styles/TeamsPage/MyTeams.css'


 function Teams(props) {
    return (
			<div className='teams-page-full'>
				<CardsList fav={props.fav} setFav={props.setFav} />
			</div>
		);
}

export default Teams;