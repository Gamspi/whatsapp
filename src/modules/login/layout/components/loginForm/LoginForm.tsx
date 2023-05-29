import React from 'react';
import {StyledLoginForm} from "./styled";
import CustomInput from "../../../../core/components/customInput/CustomInput";
import {useController} from "./controller";

const LoginForm = () => {
    const {
        idInstance,
        apiTokenInstance,
        setIdInstanceHandler,
        submitLoginFormHandler,
        setApiTokenInstanceHandler,
    } = useController()
    return (
        <StyledLoginForm.Form onSubmit={submitLoginFormHandler}>
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
