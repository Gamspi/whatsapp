import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import * as reducers from "./mutatuins";
import * as extraReducers from './actions'
import {ContactTypeEnum} from "../helpers/enums/contactTypeEnum";
import {AxiosResponse} from "axios";
import {ResponseContact, ResponseHistoryMessage} from "../models/chat";
import {contactConverter} from "../helpers/converters/contactConverter";
import {ContentTypeMessageEnum, TypeMessageEnum} from "../helpers/enums/typeMessageEnum";
import {historyMessageConverter} from "../helpers/converters/historyMessageConverter";
import {timeFormater} from "../helpers/formaters/timeFormater";
import login from "../../login/Login";

const {fetchContacts, fetchMessageHistory, sendMessage, getMessage} = extraReducers
const initialState: ChatState = {
    messages: [],
    contacts: [],
    chosenContact: null,
    isLoading: false,
    isSendLoading: false
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
        addCase(getMessage.fulfilled, (state, action) => {
            console.log(action)
        })
    },
});

export const chatActions = {...chatSlice.actions, ...extraReducers}
export const chatReducer = chatSlice.reducer
