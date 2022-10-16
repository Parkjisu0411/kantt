import React from 'react';
import styled from 'styled-components';

type TextAreaProps = {
    placeholder?: string
}

const TextAreaCompo = styled.textarea`
    height: 100px;
    width: 100%;
    padding: 20px;
    font-size: 14px;
    line-height: 21px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;

    &:focus {
        outline: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }
`

function TextArea({ placeholder }:TextAreaProps) {
    return (
        <TextAreaCompo placeholder={placeholder}></TextAreaCompo>
    );
}

export default TextArea;
