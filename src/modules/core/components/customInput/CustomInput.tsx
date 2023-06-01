import React, {InputHTMLAttributes} from 'react';
import {StiledCustomInput} from "./styled";
import InputMask from "react-input-mask";

type Props = {
    mask?: string,
    isError?: boolean
} & InputHTMLAttributes<HTMLInputElement>


const CustomInput = ({mask, ...props}: Props) => {
    return (
        mask ?
            <InputMask mask={mask} {...props}>
                <StiledCustomInput {...props}/>
            </InputMask> :
            <StiledCustomInput {...props}/>
    );
};

export default CustomInput;
