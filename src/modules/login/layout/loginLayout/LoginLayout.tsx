import React from 'react';
import LoginForm from "../components/loginForm/LoginForm";
import {StyledLoginLayout} from "./styled";

const LoginLayout = () => {
    return (
        <StyledLoginLayout>
            <LoginForm/>
        </StyledLoginLayout>
    );
};

export default LoginLayout;
