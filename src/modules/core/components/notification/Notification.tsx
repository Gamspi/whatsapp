import React, {ReactNode} from 'react';
import {StyledNotification} from "./styled";
import {useController} from "./controller";
import {createPortal} from "react-dom";

type Props = {
    onClose: () => void
    children?: ReactNode,
}
const Notification = (props: Props) => {
    const {nodeElement} = useController(props.onClose)
    return createPortal(
        <StyledNotification {...props}>
        </StyledNotification>,
        nodeElement
    )
};

export default Notification;
