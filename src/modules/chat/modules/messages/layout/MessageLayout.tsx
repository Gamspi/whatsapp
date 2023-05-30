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

        <StyledMessages>
            {chosenContact ?
                <MessagesList messages={messages}/>
                : <>
                    выберете контакт
                </>}
        </StyledMessages>

    );
};

export default MessageLayout;
