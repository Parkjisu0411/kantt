import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment, faSitemap, faUser } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';

const HeaderContainer = styled.header`
    line-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c2a34;
    color: #999999;
    padding: 0 2rem 0 2rem;
    ul {
        list-style-type: none;
        padding: 0;
        li {
            display: inline-block;
            margin-left: 2rem;
            font-size: 18px;
            font-weight: bold;

            &:hover {
                cursor: pointer;
                color: #36bfcd;
            }
        }
    }
`;

const HeaderLogo = styled.text`
    font-weight: bold;
    font-size: 20px;
    &:hover {
        cursor: pointer;
        color: #36bfcd
    }
`
function Header() {

    return (
        <HeaderContainer>
            <HeaderLogo>KANTT</HeaderLogo>
            <div>
                <ul>
                    <li>
                        <Button icon={ faSitemap } buttonType={'icon'} onClick={() => {}}></Button>
                    </li>
                    <li>
                        <Button icon={ faComment } buttonType={'icon'} onClick={() => {}}></Button>
                    </li>
                    <li>
                        <Button icon={ faBell } buttonType={'icon'} onClick={() => {}}></Button>
                    </li>
                    <li>
                        <Button icon={ faUser } buttonType={'icon'} onClick={() => {}}></Button>
                    </li>
                </ul>
            </div>
        </HeaderContainer>
    );
}

export default Header;
