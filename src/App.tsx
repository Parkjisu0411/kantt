import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/User/signIn';
import Project from './components/Project/Project';
import SignUp from './components/User/signUp';

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Project />}></Route>
				<Route path='/signin' element={<SignIn />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path="*" element={<p>ERROR</p>}></Route> 
			</Routes>
		</div>
	);
}

export default App;
