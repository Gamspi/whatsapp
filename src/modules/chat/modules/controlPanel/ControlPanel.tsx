import React from 'react';
import {useController} from "./controller";
import {StyledControlPanel} from "./syled";
import Notification from "../../../core/components/notification/Notification";

const ControlPanel = () => {
    const {
        inputRef,
        textMessage,
        isSendLoading,
        isShowPlaceholder,
        isSendMessageError,
        sendMessageHandler,
        keyDownInputHandler,
        setTextMessageHandler,
        closeNotificationHandler
    } = useController()
    return (
        <StyledControlPanel.Form onSubmit={sendMessageHandler}>
            <Notification onClose={closeNotificationHandler} isShow={isSendMessageError}>
                Ошибка отправки сообщения
            </Notification>
            <StyledControlPanel.Input
                contentEditable
                onInput={setTextMessageHandler}
                ref={inputRef}
                onKeyDown={keyDownInputHandler}
                placeholder={isShowPlaceholder ? 'Введите сообщение' : ''}/>
            {textMessage && <StyledControlPanel.Button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
            </StyledControlPanel.Button>}
            {isSendLoading && <StyledControlPanel.Loader>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                </svg>
            </StyledControlPanel.Loader>}
        </StyledControlPanel.Form>
    );
};

export default ControlPanel;
