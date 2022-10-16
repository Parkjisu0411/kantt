import React, { } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function Login() {

    return (
        <LoginContainer>
            <header>
                <h2>로그인</h2>
            </header>
            <main>
                <section>
                    <p>이메일로 로그인</p>
                    <input type={'text'} placeholder={'이메일을 입력하세요'}></input>
                    <button>로그인</button>
                </section>
                <section>
                    <p>소셜 계정으로 로그인</p>
                </section>
            </main>
        </LoginContainer>
    );
}

export default Login;
