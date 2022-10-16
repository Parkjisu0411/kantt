import React from 'react';
import styled from 'styled-components';
import ProjectNew from './Project/ProjectNew';

const MainContainer = styled.main`
`;

type MainProps = {
    project: string,
    setProject: Function
};

function Main({ project, setProject }:MainProps) {
    return (
        <MainContainer>
            <ProjectNew setProject={setProject}></ProjectNew>
        </MainContainer>
    );
}

export default Main;
