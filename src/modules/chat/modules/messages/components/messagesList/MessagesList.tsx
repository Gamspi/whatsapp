import React from 'react';
import MessagesItem from "../messagesItem/MessagesItem";
import {useController} from "./conteroller";
import {StyledMessageList} from "./styled";
import CustomScrollBar from "../../../../../core/components/customScrollBar/customScrollBar";
import {Props} from "./type";


const MessagesList = ({messages}: Props) => {
    const {
        contentRef,
        scrollBottom,
        containerRef,
        contentHeight,
        containerHeight,
        setScrollBottom,
    } = useController({messages})
    return (
        <StyledMessageList.Container ref={containerRef}>
            <CustomScrollBar
                containerHeight={containerHeight}
                contentHeight={contentHeight}
                value={scrollBottom}
                setValue={setScrollBottom}/>
            <StyledMessageList.Content ref={contentRef}>
                {messages.map(item => (
                    <MessagesItem item={item} key={item.id}/>
                ))}
            </StyledMessageList.Content>
        </StyledMessageList.Container>
    );
};

export default MessagesList;
