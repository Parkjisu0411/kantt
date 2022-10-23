import React from 'react';
import styled, { css } from 'styled-components';

type InputProps = {
    placeholder?: string,
    value?: string,
    em?: boolean
}

const InputCompo = styled.input<InputProps>`
    width: 100%;
    height: 60px;
    padding: 0 20px;
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    ${props => props.em ? css`
        color: #6449fc;
        border: 1px solid #999;
    ` : ''};
`;

export const InputText = ({ placeholder, value, em }:InputProps) => 
    (
        <InputCompo type={'text'} placeholder={placeholder} value={value} em={em}></InputCompo>
    );

export const InputPassword = ({placeholder, value, em}:InputProps) =>
    (
        <InputCompo type={'password'} placeholder={placeholder} value={value} em={em}></InputCompo>
    );

// export default InputText;