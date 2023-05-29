import React from 'react';
import {StyledChatLayout} from "./styled";
import Messages from "../../modules/messages/Messages";
import ControlPanel from "../../modules/controlPanel/ControlPanel";
import Contacts from "../../modules/contacts/Contacts";

const ChatLayout = () => {
    return (
        <StyledChatLayout.Container>
            <Contacts/>
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
