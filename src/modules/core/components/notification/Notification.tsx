import React, {ReactNode} from 'react';
import {StyledNotification} from "./styled";
import {useController} from "./controller";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";

type Props = {
    onClose: () => void
    children?: ReactNode,
    isShow: boolean
}
const Notification = (props: Props) => {
    const {nodeRef, nodeElement} = useController(props)
    return (
        <CSSTransition timeout={300} in={props.isShow} mountOnEnter unmountOnExit nodeRef={nodeRef}>
            <>
                {createPortal(
                    <StyledNotification {...props} ref={nodeRef}/>,
                    nodeElement)}
            </>
        </CSSTransition>)
};

export default Notification;
