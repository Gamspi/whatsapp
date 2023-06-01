import React from 'react';
import {StyledContactAddForm} from "./styled";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import {Props} from "./types";
import {useController} from "./controller";
import {phoneMask} from "../../../../../core/constants/phoneMask";

const ContactAddForm = (props: Props) => {
    const {closeHandler, setNameHandler, setTelHandler, submitHandler, tel, name} = useController(props)
    return (
        props.isShow ?
            <StyledContactAddForm.Container>
                <StyledContactAddForm.Background onClick={closeHandler}/>
                <StyledContactAddForm.Body onSubmit={submitHandler}>
                    <CustomInput placeholder='Name' value={name.value} onChange={setNameHandler} isError={name.isError}/>
                     <CustomInput placeholder='Tel' value={tel.value} onChange={setTelHandler} mask={phoneMask} isError={tel.isError}/>
                    <StyledContactAddForm.Button>
                        Добавить
                    </StyledContactAddForm.Button>
                </StyledContactAddForm.Body>
            </StyledContactAddForm.Container> :
            null
    );
};

export default ContactAddForm;
