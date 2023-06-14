import React from 'react';
import {StyledContactAddForm} from "./styled";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import {Props} from "./types";
import {useController} from "./controller";
import {phoneMask} from "../../../../../core/constants/phoneMask";
import {CSSTransition} from "react-transition-group";

const ContactAddForm = (props: Props) => {
    const {
        ref,
        tel,
        name,
        closeHandler,
        setTelHandler,
        submitHandler,
        setNameHandler
    } = useController(props)


    return (
        <CSSTransition in={props.isShow} timeout={300} mountOnEnter unmountOnExit nodeRef={ref}>
            <StyledContactAddForm.Container ref={ref}>
                <StyledContactAddForm.Background onClick={closeHandler}  />
                <StyledContactAddForm.Body onSubmit={submitHandler}>
                    <CustomInput placeholder='Name' value={name.value} onChange={setNameHandler} isError={name.isError}/>
                     <CustomInput placeholder='Tel' value={tel.value} onChange={setTelHandler} mask={phoneMask} isError={tel.isError}/>
                    <StyledContactAddForm.Button>
                        Добавить
                    </StyledContactAddForm.Button>
                </StyledContactAddForm.Body>
            </StyledContactAddForm.Container>
        </CSSTransition>
    );
};

export default ContactAddForm;
