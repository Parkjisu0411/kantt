import React from 'react';
import styled from 'styled-components';
import { InputText, InputPassword } from '../common/Input';
import Button from '../common/Button';

const SignUpContainer = styled.div`
    padding: 100px 0;
    max-width: 586px;
    margin: 0 auto;
    text-align: center;

    > h2 {
        margin-bottom: 30px;
        display: block;
        font-size: 36px;
        color: #333;
        font-weight: 700;
        text-align: center;
    }

    > input {
        margin-bottom: 10px;
    }
`

function SignUp() {
    return (
        <SignUpContainer>
            <h2>회원가입</h2>
            <InputText placeholder='이메일'></InputText>
            <InputText placeholder='이름'></InputText>
            <InputPassword placeholder='비밀번호'></InputPassword>
            <InputPassword placeholder='비밀번호 확인'></InputPassword>
            <Button buttonType={'text'} text='회원가입' style={{height: '3.5rem', lineHeight: '3.5rem', marginBottom: '1rem'}}></Button>
            <hr></hr>
        </SignUpContainer>
    );
}

export default SignUp;
