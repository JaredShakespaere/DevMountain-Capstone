import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import Teams from './components/TeamsPage/Teams';
import Favorites from './components/Favorites';

function App() {
	const [fav, setFav] = useState([]);
	console.log(fav);

	return (
		<>
			<NavBar />
			<UserAuthContextProvider>
				<Routes>
					<Route path='/' element={<Login />} />
					<>
						<Route path='/signup' element={<Signup />} />
						<Route
							path='/favorites/*'
							element={<Favorites fav={fav} setFav={setFav} />}
						/>
						<Route
							path='/teams'
							element={<Teams fav={fav} setFav={setFav} />}
						/>
					</>
				</Routes>
			</UserAuthContextProvider>
		</>
	);
}

export default App;

// pass fav down to the home component (like on teams)
// pull off of props then map over fav just like in teams
// child component will display card like in TeamCard
