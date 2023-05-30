import {useEffect, useRef} from "react";
import {Props} from "./type";

export const useController = ({messages} : Props) => {
    const listRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (listRef.current) {
            console.log('scroll')
            listRef.current.scrollTop = listRef.current.scrollHeight
        }
    }, [messages])
    return {
        listRef
    }
}
