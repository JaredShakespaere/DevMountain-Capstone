import React, { useState, useEffect } from 'react';
import '../styles/Dropdown.css';
import { teamsDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import NbaApi from './NbaApi';


export default function Dropdown() {
	const [teams, updateTeams] = React.useState()
	const [dropdown, setDropdown] = useState(false);

	<NbaApi />
	return (
		<>
			
			<ul
				className={dropdown ? 'teams-dropdown clicked' : 'teams-dropdown'}
				onClick={() => setDropdown(!dropdown)}>
				{teamsDropdown.map((item) => {
					return (
						<li key={item.id} className='li-dropdown'>
							<Link
								className={item.className}
								to={item.path}
								onClick={() => setDropdown(false)}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
