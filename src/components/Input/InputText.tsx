import React from 'react';
import styled from 'styled-components';

type InputTextProps = {
    placeholder?: string,
    value?: string
}

const InputTextCompo = styled.input`
    width: 100%;
    height: 60px;
    padding: 0 20px;
    color: #6449fc;
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    border: 1px solid #999;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }
`;

function InputText({ placeholder, value }:InputTextProps) {
    return (
        <InputTextCompo type={'text'} placeholder={placeholder} value={value}></InputTextCompo>
    );
}

export default InputText;
