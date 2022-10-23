import React from 'react';
import styled from 'styled-components';
import { InputText, InputPassword } from '../common/Input';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const SignInContainer = styled.div`
    padding: 200px 0;
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

function SignIn() {
    return (
        <SignInContainer>
            <h2>로그인</h2>
            <InputText placeholder='이메일'></InputText>
            <InputPassword placeholder='비밀번호'></InputPassword>
            <Link to={'/signin'}>비밀번호 찾기</Link>
            <Link to={'/signup'}>회원가입</Link>
            <Button buttonType={'text'} text='로그인' style={{height: '3.5rem', lineHeight: '3.5rem', marginBottom: '1rem'}}></Button>
            <hr></hr>
        </SignInContainer>
    );
}

export default SignIn;
