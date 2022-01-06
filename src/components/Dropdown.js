import React, { useState } from 'react';
import '../styles/Dropdown.css';
import { Link } from 'react-router-dom';
import { nbaTeamsData } from './TeamsPage/NbaTeamsData';

export default function Dropdown() {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<ul
				className={dropdown ? 'teams-dropdown clicked' : 'teams-dropdown'}
				onClick={() => setDropdown(!dropdown)}>
				{nbaTeamsData.map((item) => {
					return (
						<li key={item.teamId} className='li-dropdown'>
							<Link className={item.leagues} to={item.nickname}>
								{item.fullName}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
