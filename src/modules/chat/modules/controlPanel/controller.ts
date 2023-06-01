import {FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState} from "react";
import {useAction} from "../../../core/hooks/useActions";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";

export const useController = () => {
    const [textMessage, setTextMessage] = useState('')
    const inputRef = useRef<HTMLDivElement>(null)
    const {isSendLoading, chosenContact, isSendMessageError} = useTypeSelector(state => state.chat)
    const {sendMessage, setIsSendMessageError} = useAction()
    const isShowPlaceholder = useMemo(() => !textMessage.length, [textMessage.length])
    const setTextMessageHandler = (e: FormEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        setTextMessage(target.innerText)
    }
    const clearForm = () => {
        if (inputRef.current) inputRef.current.innerHTML = ''
        setTextMessage('')
    }
    const sendMessageCallback = () => {
        if (textMessage.trim() && chosenContact) {
            sendMessage({message: textMessage, chatId: chosenContact.id})
            clearForm()
        }
    }
    const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendMessageCallback()
    }
    const keyDownInputHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        const keyCodeEnter = 'Enter'
        if (e.code === keyCodeEnter) {
            sendMessageCallback()
            e.preventDefault()
        }
    }
    const closeNotificationHandler = () => {
        setIsSendMessageError(false)
    }
    useEffect(() => {
        clearForm()
    }, [chosenContact])
    return {
        inputRef,
        textMessage,
        isSendLoading,
        isShowPlaceholder,
        isSendMessageError,
        sendMessageHandler,
        keyDownInputHandler,
        setTextMessageHandler,
        closeNotificationHandler
    }
}
