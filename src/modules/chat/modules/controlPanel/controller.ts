import axios, {AxiosResponse} from "axios";
import {FormEvent, useEffect, useState} from "react";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {ResponseMessage} from "../../models/chat";
import {messageConverter} from "../../helpers/converters/messageConverter";
import {useAction} from "../../../core/hooks/useActions";

export const useController = () => {
    const [textMessage, setTextMessage] = useState('')
    const {addMessage} = useAction()
    const {apiTokenInstance, idInstance} = useTypeSelector(state => state.general)
    const setTextMessageHandler = (e: FormEvent<HTMLTextAreaElement>) => {
        const target = e.target as HTMLTextAreaElement
        setTextMessage(target.value)
    }
    const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (textMessage.trim()) {
            axios.post(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
                chatId: '79131077475@c.us',
                message: textMessage
            })
        }
        setTextMessage('')
    }
    const getMessage = () => {
        axios.get<ResponseMessage>(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`).then(({data}) => {
            // console.log(data)
            if (data) {
                console.log(messageConverter(data))
                addMessage(messageConverter(data))
            }

        }).finally(() => {
            // getMessage()
        })
    }
    useEffect(() => {
        getMessage()
    }, [])
    return {
        textMessage,
        sendMessageHandler,
        setTextMessageHandler
    }
}
