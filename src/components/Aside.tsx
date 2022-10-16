import { faCalendar, faFile } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faEllipsisVertical, IconDefinition, faChartGantt, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEventHandler } from 'react';

import styled from 'styled-components';
import Button from './Input/Button';

const AsideContainer = styled.aside`
    background-color: #2c2a34;
    color: #999999;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > div {
        box-sizing: border-box;
        padding: 1rem 2rem 1rem 2rem;
        width: 100%;
        border-top: 1px solid #484654;
    }
`

const SideItemContainer = styled.div`
    text-align: left;
    font-size: 15px;
    font-weight: 800;
    > svg {
        width: 1rem;
        height: 1rem;
        margin: 9px 14px 0 0;
    }

    &:hover {
        cursor: pointer;
        color: #36bfcd
    }
`

type SideItemProps = {
    icon: IconDefinition,
    name: String,
    onClick?: MouseEventHandler
};

const SideItem = ( {icon, name, onClick}:SideItemProps ) => {
    return (
        <SideItemContainer>
            <FontAwesomeIcon icon={ icon }></FontAwesomeIcon>
            {name}
        </SideItemContainer>
    )
}

function Aside() {

    return (
        <AsideContainer>
            {/* project */}
            <div>
                <Button buttonType={'text'} text="새 프로젝트" style={{height: '2.5rem', lineHeight: '2.5rem', marginBottom: '1rem'}}></Button>
                <SideItem icon={faHouse} name={'내 프로젝트'}></SideItem>
                <SideItem icon={faEllipsisVertical} name={'더보기'}></SideItem>
            </div>
            {/* project view */}
            <div>
                <SideItem icon={faChartGantt} name={'간트차트'}></SideItem>
                <SideItem icon={faSquare} name={'칸반보드'}></SideItem>
                <SideItem icon={faCalendar} name={'캘린더'}></SideItem>
                <SideItem icon={faFile} name={'파일함'}></SideItem>
            </div>
        </AsideContainer>
    );
}

export default Aside;
