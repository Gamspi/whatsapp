import React from 'react';
import {StyledMessages} from "./ctyled";
import {useController} from "./controller";
import MessagesList from "../components/messagesList/MessagesList";
import Notification from "../../../../core/components/notification/Notification";

const MessageLayout = () => {
    const {
        messages,
        chosenContact,
        isGetHistoryError,
        hideNotificationHandler,

    } = useController()
    return (

        <StyledMessages.Container>
            {isGetHistoryError && <Notification onClose={hideNotificationHandler}>
                Ошибка получения истории сообщений
            </Notification>
            }

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
