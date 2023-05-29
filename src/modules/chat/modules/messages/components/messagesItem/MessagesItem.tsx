import React from 'react';
import {StyledMessageItem} from "./styled";
import {Props} from "./type";

const MessagesItem = ({item, isMain}:Props) => {
    return (
        <StyledMessageItem.Container isMain={isMain}>
            <StyledMessageItem.Content isMain={isMain}>
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
