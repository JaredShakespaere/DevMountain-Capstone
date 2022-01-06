import '../../styles/TeamsPage/TeamLogo.css'

function TeamLogo({ logo, fullName }) {
	return (
		<div className='pic-div'>
			<img className='pic' src={logo}  alt={fullName}></img>
		</div>
	);
}

export default TeamLogo;