import React from 'react';
import {StyledMessageItem} from "./styled";
import {Props} from "./type";
import {TypeMessageEnum} from "../../../../helpers/enums/typeMessageEnum";

const MessagesItem = ({item,isActive}:Props) => {
    return (
        <StyledMessageItem.Container isMain={item.type === TypeMessageEnum.OUTGOING} isActive={isActive}>
            <StyledMessageItem.Content isMain={item.type === TypeMessageEnum.OUTGOING}>
                <StyledMessageItem.Body>
                    {item.text}
                </StyledMessageItem.Body>
                <StyledMessageItem.Footer>
                    {item.time}
                </StyledMessageItem.Footer>
            </StyledMessageItem.Content>
        </StyledMessageItem.Container>
    );
};

export default MessagesItem;
