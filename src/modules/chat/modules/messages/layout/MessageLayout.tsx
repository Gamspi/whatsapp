import React from 'react';
import {StyledMessages} from "./ctyled";
import MessagesItem from "../components/messagesItem/MessagesItem";
import {useController} from "./controller";

const MessageLayout = () => {
    const {messages, chosenContact} = useController()
    return (

        <StyledMessages>
            {chosenContact ?
                messages.map(item => (
                    <MessagesItem item={item} key={item.id}/>
                ))
                : <>
                    выберете контакт
                </>}
        </StyledMessages>

    );
};

export default MessageLayout;
