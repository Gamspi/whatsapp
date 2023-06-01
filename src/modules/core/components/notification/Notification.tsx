import React, {ReactNode} from 'react';
import {StyledNotification} from "./styled";
import {useController} from "./controller";
import {createPortal} from "react-dom";

type Props = {
    isShow: boolean,
    onClose: () => void
    children?: ReactNode,
}
const Notification = (props: Props) => {
    const {nodeElement} = useController(props.onClose)
    return props.isShow ? createPortal(
        <StyledNotification {...props}>
        </StyledNotification>,
        nodeElement
    ) : null
};

export default Notification;
