import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import styled from 'styled-components';

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 1fr 6fr;
	grid-template-rows: 2.5rem auto;
	grid-template-areas: 
		'header header'
		'aside main';

	header {
		grid-area: header;
	}

	aside {
		grid-area: aside;
	}

	main {
		grid-area: main;
	}
`;

function App() {

	const [project, setProject] = useState('New');

	useEffect(() => {
		if(parseInt(project) === NaN)
			return;
		
		fetch('')
		.then(response => response.json())
		.then(data => {
			
		})
		.catch(error => console.error(error));
		
	}, [project]);

	return (
		<AppContainer className="App">
		<Header></Header>
		<Aside></Aside>
		<Main project={project} setProject={setProject}></Main>
		</AppContainer>
	);
}

export default App;
