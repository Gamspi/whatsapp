import {Props} from "./type";
import {useMemo} from "react";

export const useController = ({contentHeight, containerHeight}: Props) => {
    const isScroll = useMemo(() => {
        return containerHeight < contentHeight
    }, [containerHeight, contentHeight])
    const tumbHeight = useMemo(()=>{
        return  containerHeight / contentHeight* 100
    }, [containerHeight, contentHeight])
    return {
        tumbHeight,
        isScroll
    }
}
