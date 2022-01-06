import React from 'react';
import '../styles/Navbar.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { navItems } from './NavItems';
// import Dropdown from './Dropdown';

export default function NavBar() {
	// const [dropdown, setDropdown] = useState(false);
	// const [teams, updateTeams] = React.useState(null);

	return (
		<>
			<nav className='navbar'>
				<Link to='/favorites' className='navbar-logo'>
					<FontAwesomeIcon
						icon={faBasketballBall}
						className='teams-icon'
						id='basketball-icon'
					/>
					Never Miss A Play
				</Link>
				<ul className='nav-items'>
					{navItems.map((item) => {
						// if (item.title === 'Teams') {
						// 	return (
						// 		<li
						// 			key={item.id}
						// 			className={item.className}
						// 			onMouseEnter={() => setDropdown(true)}
						// 			onMouseLeave={() => setDropdown(false)}>
						// 			<Link to={item.path}>{item.title}</Link>
						// 			{dropdown && <Dropdown teams = {teams} updateTeams = {updateTeams}/>}
						// 		</li>
						// 	);
						// }
						return (
							<li key={item.id} className={item.className}>
								<Link to={item.path}>{item.title}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
