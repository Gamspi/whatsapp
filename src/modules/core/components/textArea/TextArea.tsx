import React, {AreaHTMLAttributes, InputHTMLAttributes} from 'react';
import {StyledTextArea} from "./styeld";

type Props = InputHTMLAttributes<HTMLTextAreaElement>
const TextArea = (props: Props) => {
    return (
        <StyledTextArea {...props}/>
    );
};

export default TextArea;
