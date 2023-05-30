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
        console.log('test')
        if (textMessage.trim() && chosenContact) {
            sendMessage({message: textMessage, chatId: chosenContact.id})
            clearForm()
        }

    }
    const getMessage = () => {
        // axios.get<ResponseMessage>(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`).then(({data}) => {
        //     // console.log(data)
        //     if (data) {
        //         addMessage(messageConverter(data))
        //     }
        //
        // }).finally(() => {
        //     // getMessage()
        // })
    }
    useEffect(() => {
        getMessage()
    }, [])
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
