import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from './common/Button';

import { faBell, faComment, faSitemap, faUser } from '@fortawesome/free-solid-svg-icons';

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

    a {
        color: #999999;
        &:hover {
            color: #36bfcd;
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
            <Link to={'/'}>
                <HeaderLogo>KANTT</HeaderLogo>
            </Link>
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
                        <Link to={'/signin'}>
                            <Button icon={ faUser } buttonType={'icon'} onClick={() => {}}></Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </HeaderContainer>
    );
}

export default Header;
