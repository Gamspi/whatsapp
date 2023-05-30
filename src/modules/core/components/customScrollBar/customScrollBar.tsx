import React from 'react';
import {Props} from "./type";
import {useController} from "./controller";
import {StyledCustomBar} from "./styled";

const CustomScrollBar = (props: Props) => {
    const {isScroll, tumbHeight}  = useController(props)
    return (
        <StyledCustomBar.Track>
            <StyledCustomBar.Tumb tumbHeight={tumbHeight} value={props.value}/>
            {props.contentHeight}
            {props.containerHeight}
            {isScroll && 'isScroll'}
        </StyledCustomBar.Track>
    );
};

export default CustomScrollBar;
