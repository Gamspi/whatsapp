import React from 'react';
import {Contact} from "../../../../models/chat";
import {StyledContactItem} from "./styled";
import {useController} from "./controller";

type Props = {
    item: Contact
}

const ContactsItem = ({item}: Props) => {
    const {chooseContactHandler} = useController()
    return (
        <StyledContactItem.Container onClick={()=> chooseContactHandler(item)}>
            <StyledContactItem.Label>
                {item.name || item.tel}
            </StyledContactItem.Label>
        </StyledContactItem.Container>
    );
};

export default ContactsItem;
