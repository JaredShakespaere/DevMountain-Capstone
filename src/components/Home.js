import React from 'react';
import '../styles/Home.css';
import { useUserAuth } from '../context/AuthContext';
import TeamBall from './TeamBall';
import TeamBallTwo from './TeamBallTwo';
import SimpleSwiper from './SimpleSwiper';


export default function Home() {
	const { user, logOut } = useUserAuth;

	const handleLogOut = async () => {
		try {
			await logOut();
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<TeamBall  />
			<TeamBallTwo />
			<SimpleSwiper />
		</>
	);
}
