import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';


type ButtonProps = {
    buttonType: String,
    icon?: IconDefinition,
    text?: String,
    style?: Object,
    onClick?: MouseEventHandler
};

const ButtonCompo = styled.div<ButtonProps>`
    
    /* 공통 */
    border-radius: 4px;
    margin: 0 auto;
    text-align: center;

    /* 텍스트 */
    ${props =>  {
        if(props.buttonType === 'text')
            return css`
                background-color: #6449fc;
                color: #fff;
                font-weight: bold;
            `
        }
    }

    &:hover {
        cursor: pointer;
    }
`;

function Button({ buttonType, icon, text, style, onClick }: ButtonProps) {
    
    if(buttonType === 'icon' && icon !== undefined) {
        return (
            <ButtonCompo buttonType={buttonType}>
                <FontAwesomeIcon icon={ icon } onClick={onClick}></FontAwesomeIcon>
            </ButtonCompo>
        )
    }

    return (
        <ButtonCompo buttonType={buttonType} style={style}>
            {text}
        </ButtonCompo>
    );
}


export default Button;
