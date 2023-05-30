import React from 'react';
import {StyledContactAddForm} from "./styled";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import {Props} from "./types";
import {useController} from "./controller";

const ContactAddForm = (props: Props) => {
    const {closeHandler, setNameHandler, setTelHandler, submitHandler} = useController(props)
    return (
        props.isShow ?
            <StyledContactAddForm.Container>
                <StyledContactAddForm.Background onClick={closeHandler}/>
                <StyledContactAddForm.Body onSubmit={submitHandler}>
                    <CustomInput placeholder='Name' onChange={setNameHandler}/>
                    <CustomInput placeholder='Tel' onChange={setTelHandler}/>
                    <StyledContactAddForm.Button>
                        Submit
                    </StyledContactAddForm.Button>
                </StyledContactAddForm.Body>
            </StyledContactAddForm.Container> :
            null
    );
};

export default ContactAddForm;
