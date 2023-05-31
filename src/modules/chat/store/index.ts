import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import * as reducers from "./mutatuins";
import * as extraReducers from './actions'
import {ContactTypeEnum} from "../helpers/enums/contactTypeEnum";
import {AxiosResponse} from "axios";
import {ResponseContact, ResponseHistoryMessage, ResponseMessage} from "../models/chat";
import {contactConverter} from "../helpers/converters/contactConverter";
import {ContentTypeMessageEnum, TypeMessageEnum} from "../helpers/enums/typeMessageEnum";
import {historyMessageConverter} from "../helpers/converters/historyMessageConverter";
import {timeFormater} from "../helpers/formaters/timeFormater";
import {TypeWebhookEnum} from "../helpers/enums/typeWebhookEnum";
import {messageConverter} from "../helpers/converters/messageConverter";

const {fetchContacts, fetchMessageHistory, sendMessage, getMessage} = extraReducers
const initialState: ChatState = {
    messages: [],
    contacts: [],
    chosenContact: null,
    isLoading: false,
    isSendLoading: false,
    isFetchNotification: false
}
export const chatSlice = createSlice({
    name: 'shat',
    initialState,
    reducers,
    extraReducers: ({addCase}) => {
        addCase(fetchContacts.fulfilled, (state, action: PayloadAction<AxiosResponse<ResponseContact[]>>) => {
            const contactsArray = action.payload.data
            if (contactsArray) {
                state.contacts = [...contactsArray.filter(item => item.type === ContactTypeEnum.USER).map(item => contactConverter(item))]
            }

        })
        addCase(fetchContacts.rejected, () => {
            alert('error')
        })
        addCase(fetchMessageHistory.pending, (state) => {
            state.isLoading = true
        })
        addCase(fetchMessageHistory.rejected, (state) => {
            state.isLoading = true
        })
        addCase(fetchMessageHistory.fulfilled, (state, action: PayloadAction<AxiosResponse<ResponseHistoryMessage[]>>) => {
            state.isLoading = false
            const messageArray = action.payload?.data
            if (messageArray) {
                state.messages = [...messageArray.filter(item => item.typeMessage === ContentTypeMessageEnum.TEXT || item.typeMessage === ContentTypeMessageEnum.EXTENDED_TEST
                ).map(item => historyMessageConverter(item))]
            }
        })

        addCase(sendMessage.pending, (state) => {
            state.isSendLoading = true
        })
        addCase(sendMessage.rejected, (state) => {
            state.isSendLoading = false
        })
        addCase(sendMessage.fulfilled, (state, action) => {
            if (action.payload.data?.idMessage) {
                const message = {
                    id: action.payload.data.idMessage,
                    type: TypeMessageEnum.OUTGOING,
                    time: timeFormater(Date.now()),
                    text: action.meta.arg.message
                }
                state.messages = [message, ...state.messages]
                state.isSendLoading = false
            }
        })
        addCase(getMessage.pending, (state, action) => {
            state.isFetchNotification = true
        })
        addCase(getMessage.fulfilled, (state, {payload}: PayloadAction<ResponseMessage>) => {
            state.isFetchNotification = false
            if (payload?.body.typeWebhook === TypeWebhookEnum.IN) {
                const chatId = payload.body.senderData.chatId
                if (chatId === state.chosenContact?.id) {
                    // добавляем сообщение в открытый чат
                    state.messages = [messageConverter(payload), ...state.messages]
                } else {
                    const existContact = state.contacts.find(contact => contact.id === chatId)
                    if (existContact) {
                        //добавляем уведомление контакиту
                        state.contacts = [...state.contacts.map(item => {
                            if (item.id === chatId) {
                                return {
                                    ...item,
                                    count: item.count + 1
                                }
                            }
                            return item
                        })]
                    } else {
                        // добавляем новый контакт если его нет
                        state.contacts = [...state.contacts, {
                            id: chatId,
                            name: '',
                            type: ContactTypeEnum.USER,
                            tel: '+' + parseInt(chatId),
                            count: 1
                        }]
                    }

                }
            }
        })
        addCase(getMessage.rejected, (state, action) => {
            state.isFetchNotification = false
        })
    },
});

export const chatActions = {...chatSlice.actions, ...extraReducers}
export const chatReducer = chatSlice.reducer
