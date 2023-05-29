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

const {fetchContacts, fetchMessageHistory} = extraReducers
const initialState: ChatState = {
    messages: [],
    contacts: [],
    chosenContact: null
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
        addCase(fetchMessageHistory.fulfilled, (state, action:PayloadAction<AxiosResponse<ResponseHistoryMessage[]>>)=> {
            const messageArray = action.payload?.data
            if (messageArray) {
                state.messages = [...messageArray.filter(item => item.typeMessage === ContentTypeMessageEnum.TEXT).map(item => historyMessageConverter(item))]
            }
        })
    },
});

export const chatActions = {...chatSlice.actions, ...extraReducers}
export const chatReducer = chatSlice.reducer
