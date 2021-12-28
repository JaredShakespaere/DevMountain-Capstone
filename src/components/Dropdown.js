import React, { useState } from 'react';
import '../styles/Dropdown.css';
import { teamsDropdown } from './NavItems';
import { Link } from 'react-router-dom';

export default function Dropdown() {
	const [dropdown, setDropdown] = useState(false);
	fetch('https://api-nba-v1.p.rapidapi.com/teams/league/standard', {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
			'x-rapidapi-key': '04ae5e1002msh74ff5480ca1af46p132c28jsn451192ec026b',
		},
	})
		.then((res) => {
			return res.json();
		})
		.then(data => console.log())
		.catch((err) => {
			console.error(err);
		});
	return (
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
	);
}
