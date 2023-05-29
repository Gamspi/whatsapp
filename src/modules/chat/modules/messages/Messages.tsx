import React from 'react';
import {StyledMessages} from "./ctyled";
import {useController} from "./controller";
import MessagesItem from "./components/messagesItem/MessagesItem";

const Messages = () => {
const {messages} = useController()
     return (
        <StyledMessages>
            {messages.map(item => (
                <MessagesItem item={item} key={item.id}/>
            ))}
        </StyledMessages>
    );
};

export default Messages;
