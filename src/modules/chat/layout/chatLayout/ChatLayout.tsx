import React from 'react';
import {StyledChatLayout} from "./styled";
import Messages from "../../modules/messages/Messages";
import ControlPanel from "../../modules/controlPanel/ControlPanel";
import Contacts from "../../modules/contacts/Contacts";
import {useController} from "./controller";
import EmptySvg from "../../components/emptySvg";
import Loader from "../../../core/components/loader/Loader";

const ChatLayout = () => {
    const {chosenContact, isLoading} = useController()
    return (

        <StyledChatLayout.Container>
            <StyledChatLayout.Contacts>
                <Contacts/>
            </StyledChatLayout.Contacts>
            {chosenContact ? <StyledChatLayout.Body>
                    <StyledChatLayout.Messages>
                        <Messages/>
                    </StyledChatLayout.Messages>
                    <StyledChatLayout.ControlPanel>
                        <ControlPanel/>
                    </StyledChatLayout.ControlPanel>
                </StyledChatLayout.Body> :
                <StyledChatLayout.Empty>
                    <EmptySvg/>
                </StyledChatLayout.Empty>
            }
            <Loader isLoading={isLoading} opacity={0.5}/>
        </StyledChatLayout.Container>
    );
};

export default ChatLayout;
