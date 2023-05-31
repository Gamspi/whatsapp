import React from 'react';
import {StyledMessages} from "./ctyled";
import {useController} from "./controller";
import MessagesList from "../components/messagesList/MessagesList";

const MessageLayout = () => {
    const {
        chosenContact,
        messages
    } = useController()
    return (

        <StyledMessages.Container>
            <StyledMessages.Header>
                {chosenContact?.name}
            </StyledMessages.Header>
            <StyledMessages.List>
                <MessagesList messages={messages}/>
            </StyledMessages.List>


        </StyledMessages.Container>

    );
};

export default MessageLayout;
