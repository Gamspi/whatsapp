import React from 'react';
import {Contact} from "../../../../models/chat";
import {StyledContactItem} from "./styled";
import {useController} from "./controller";

type Props = {
    item: Contact,
    isActive: boolean
}

const ContactsItem = ({item, isActive}: Props) => {
    const {
        chooseContactHandler
    } = useController()
    return (
        <StyledContactItem.Container onClick={() => chooseContactHandler(item)} isActive={isActive}>
            <StyledContactItem.Label>
                {item.name || item.tel}
            </StyledContactItem.Label>
            {!!item.count && <StyledContactItem.Count>
                {item.count}
            </StyledContactItem.Count>}
        </StyledContactItem.Container>
    );
};

export default ContactsItem;
