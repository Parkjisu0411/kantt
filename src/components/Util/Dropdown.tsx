import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TRANSITION_DURATION = 300;

const Container = styled.div`
    position: absolute;
    right: 10rem;
    width: 11rem;
    background-color: #FFFFFF;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0px;
    display: flex;
    flex-direction: column;
    opacity: 1;
    transition: opacity ${TRANSITION_DURATION}ms;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    font-size: 0.875rem;
    font-weight: 600;
    border-bottom: 1px solid #F1F3F5;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;
    &:hover {
        color: #63E6BE;
    }
`;

type DropdownProps = {
    isActive: boolean,
    items: {
        name: string,
        value: string
    } []
}

function Dropdown({ isActive, items }: DropdownProps) {

    const listItems = items.map(item => <ListItem className='compo-hover--pointer' key={item.value}>{item.name}</ListItem>);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <>
        {isActive && 
            <Container ref={containerRef}>
                <List>
                    {listItems}
                </List>
            </Container>
        }
        </>
    );
}

export default Dropdown;
