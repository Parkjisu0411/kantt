import React from 'react';
import styled from 'styled-components';
import Button from '../Input/Button';
import InputText from '../Input/InputText';
import TextArea from '../Input/TextArea';

const ProjectNewContainer = styled.div`
`;

const ProjectHeader = styled.header`
    line-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c2a34;
    padding: 0 2rem 0 2rem;
    font-weight: bold;
    font-size: 20px;
`;

const ProjectNav = styled.nav``;

const ProjectMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    > div {
        width: 640px;
        margin-top: 10px;
    }
`;

type ProjectNewProps = {
    setProject: Function
}

function ProjectNew({setProject}: ProjectNewProps) {

    const createProject = () => {
        
    };

    return (
        <ProjectNewContainer>
            <ProjectHeader>
                새 프로젝트 시작하기
            </ProjectHeader>
            <ProjectNav></ProjectNav>
            <ProjectMain>
                <div>
                    <InputText placeholder='제목을 입력하세요.'></InputText>
                </div>
                <div>
                    <TextArea placeholder='프로젝트에 관한 설명 입력'></TextArea>
                </div>
                <div>
                    <Button buttonType={'text'} text={'프로젝트 생성'} style={{height: '3.5rem', lineHeight: '3.5rem', marginBottom: '1rem', width: '250px'}} onClick={createProject}></Button>
                </div>
            </ProjectMain>
        </ProjectNewContainer>
    );
}

export default ProjectNew;
