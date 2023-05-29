import React, {InputHTMLAttributes} from 'react';
import {StiledCustomInput} from "./styled";

type Props = InputHTMLAttributes<HTMLInputElement>

const CustomInput = (props: Props) => {
    return (
        <StiledCustomInput {...props}/>
    );
};

export default CustomInput;
