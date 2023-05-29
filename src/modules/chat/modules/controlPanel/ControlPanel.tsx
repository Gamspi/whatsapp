import React from 'react';
import {useController} from "./controller";
import {StyledControlPanel} from "./syled";
import TextArea from "../../../core/components/textArea/TextArea";

const ControlPanel = () => {
    const {textMessage, sendMessageHandler, setTextMessageHandler} = useController()
    return (
        <StyledControlPanel.Form onSubmit={sendMessageHandler}>
            <TextArea value={textMessage} onChange={setTextMessageHandler}/>
            <button>send</button>
        </StyledControlPanel.Form>
    );
};

export default ControlPanel;
