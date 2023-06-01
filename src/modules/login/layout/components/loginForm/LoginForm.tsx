import React from 'react';
import {StyledLoginForm} from "./styled";
import CustomInput from "../../../../core/components/customInput/CustomInput";
import {useController} from "./controller";
import Notification from "../../../../core/components/notification/Notification";

const LoginForm = () => {
    const {
        idInstance,
        isLoginError,
        apiTokenInstance,
        closeNotification,
        setIdInstanceHandler,
        submitLoginFormHandler,
        setApiTokenInstanceHandler,
    } = useController()
    return (
        <StyledLoginForm.Form onSubmit={submitLoginFormHandler}>
            <Notification isShow={isLoginError} onClose={closeNotification}>Ошибка авторизации</Notification>
            <StyledLoginForm.Title>
                Login
            </StyledLoginForm.Title>
            <StyledLoginForm.Body>
                <CustomInput placeholder='Id Instance' value={idInstance} onChange={setIdInstanceHandler}/>
                <CustomInput placeholder='Api TokenInstance' value={apiTokenInstance}
                             onChange={setApiTokenInstanceHandler}/>
            </StyledLoginForm.Body>
            <StyledLoginForm.Footer>
                <StyledLoginForm.Button>
                    Login
                </StyledLoginForm.Button>
            </StyledLoginForm.Footer>
        </StyledLoginForm.Form>
    );
};

export default LoginForm;
