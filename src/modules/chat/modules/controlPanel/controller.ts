import {FormEvent, useEffect, useRef, useState} from "react";
import {useAction} from "../../../core/hooks/useActions";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";

export const useController = () => {
    const [textMessage, setTextMessage] = useState('')
    const inputRef = useRef<HTMLDivElement>(null)
    const {isSendLoading, chosenContact} = useTypeSelector(state => state.chat)
    const {sendMessage} = useAction()
    const setTextMessageHandler = (e: FormEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        setTextMessage(target.innerText)
    }
    const clearForm = () => {
        if (inputRef.current) inputRef.current.innerHTML = ''
        setTextMessage('')
    }
    const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (textMessage.trim() && chosenContact) {
            sendMessage({message: textMessage, chatId: chosenContact.id})
            clearForm()
        }

    }
    useEffect(() => {
        clearForm()
    }, [chosenContact])
    return {
        inputRef,
        textMessage,
        isSendLoading,
        sendMessageHandler,
        setTextMessageHandler
    }
}
