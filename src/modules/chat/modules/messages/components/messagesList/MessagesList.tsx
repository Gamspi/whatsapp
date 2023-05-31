import React from 'react';
import MessagesItem from "../messagesItem/MessagesItem";

import {StyledMessageList} from "./styled";
import {Props} from "./type";
import {useController} from "./controller";


const MessagesList = ({messages}: Props) => {
    const {listRef,chosenContactId} = useController({messages})
    return (
        <StyledMessageList.Container ref={listRef}>
            <StyledMessageList.Content >
                {messages.map(item => (
                    <MessagesItem item={item} key={item.id} isActive={chosenContactId === item.id}/>
                ))}
            </StyledMessageList.Content>
        </StyledMessageList.Container>
    );
};

export default MessagesList;
