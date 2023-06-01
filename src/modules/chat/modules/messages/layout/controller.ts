import {useTypeSelector} from "../../../../core/hooks/useTypeSelector";
import {useEffect, useRef} from "react";
import {useAction} from "../../../../core/hooks/useActions";


export const useController = () => {
    const {fetchMessageHistory, setIsGetHistoryError} = useAction()
    const {messages, chosenContact, isGetHistoryError} = useTypeSelector(state => state.chat)
    useEffect(()=>{
        if(chosenContact) {
            fetchMessageHistory({contact:chosenContact, count: 100})
        }
    },[chosenContact])
    const hideNotificationHandler = () => {
        setIsGetHistoryError(false)
    }
    return {
        messages,
        chosenContact,
        isGetHistoryError,
        hideNotificationHandler,
    }
}
