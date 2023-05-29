import React from 'react';
import {StyledChatLayout} from "./styled";
import Messages from "../../modules/messages/Messages";
import ControlPanel from "../../modules/controlPanel/ControlPanel";

const ChatLayout = () => {
    return (
        <StyledChatLayout.Container>
            <StyledChatLayout.Messages>
                <Messages/>
            </StyledChatLayout.Messages>
            <StyledChatLayout.ControlPanel>
                <ControlPanel/>
            </StyledChatLayout.ControlPanel>
        </StyledChatLayout.Container>
    );
};

export default ChatLayout;
