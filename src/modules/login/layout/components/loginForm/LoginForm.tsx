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
        isDisabledSubmitButton,
        closeNotification,
        setIdInstanceHandler,
        submitLoginFormHandler,
        setApiTokenInstanceHandler,
    } = useController()
    return (
        <StyledLoginForm.Form onSubmit={submitLoginFormHandler}>
            <Notification onClose={closeNotification} isShow={isLoginError}>Ошибка авторизации</Notification>
            <StyledLoginForm.Title>
                Авторизация
            </StyledLoginForm.Title>
            <StyledLoginForm.Body>
                <CustomInput placeholder='Id Instance' value={idInstance} onChange={setIdInstanceHandler}/>
                <CustomInput placeholder='Api TokenInstance' value={apiTokenInstance}
                             onChange={setApiTokenInstanceHandler}/>
            </StyledLoginForm.Body>
            <StyledLoginForm.Footer>
                <StyledLoginForm.Button type='submit' disabled={isDisabledSubmitButton}>
                    Отправить
                </StyledLoginForm.Button>
            </StyledLoginForm.Footer>
        </StyledLoginForm.Form>
    );
};

export default LoginForm;
