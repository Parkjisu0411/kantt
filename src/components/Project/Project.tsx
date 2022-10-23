import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aside from '../Aside';
import Header from '../Header';
import Main from '../Main';


const ProjectContainer = styled.div`
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


function Project() {

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
        <ProjectContainer>
            <Header></Header>
            <Aside></Aside>
            <Main project={project} setProject={setProject}></Main>
        </ProjectContainer>
    );
}

export default Project;
