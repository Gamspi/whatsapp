import {useEffect, useMemo, useRef} from "react";
import {Props} from "./type";
import {useTypeSelector} from "../../../../../core/hooks/useTypeSelector";

export const useController = ({messages} : Props) => {
    const listRef = useRef<HTMLDivElement>(null)
    const {chosenContact} = useTypeSelector(state => state.chat)
    const chosenContactId = useMemo(()=> chosenContact?.id, [chosenContact?.id])
    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight
        }
    }, [messages])
    return {
        listRef,
        chosenContactId
    }
}
