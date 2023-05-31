import {createAsyncThunk} from "@reduxjs/toolkit";
import {GreenService} from "../../core/api/greenService";
import {RootState} from "../../core/store/store";
import {Contact} from "../models/chat";

const fetchContacts = createAsyncThunk<any, void, { state: RootState }>('chat/fetchContacts', async (args, {
    rejectWithValue,
    getState
}) => {
    try {
        const {general} = getState()
        return await GreenService.GET<Contact[]>(`waInstance${general.idInstance}/getContacts/${general.apiTokenInstance}`)
    } catch (e) {
        rejectWithValue('error')
    }
})
const fetchMessageHistory = createAsyncThunk<any, { contact: Contact, count?: number }, { state: RootState }>('chat/fetchMessageHistory',
    async ({
               contact,
               count
           }, {
               rejectWithValue,
               getState
           }) => {
        try {
            const {general} = getState()
            return await GreenService.POST(`waInstance${general.idInstance}/getChatHistory/${general.apiTokenInstance}`, {
                chatId: contact.id,
                count
            })
        } catch (e) {
            rejectWithValue('error')
        }
    })
const sendMessage = createAsyncThunk<any, { chatId: string, message: string }, { state: RootState }>('chat/sendMessage', async (
    {
        chatId,
        message
    }, {
        rejectWithValue,
        getState
    }) => {
    try {
        const {general} = getState()
        return await GreenService.POST<{ idMessage: string }>(`waInstance${general.idInstance}/sendMessage/${general.apiTokenInstance}`, {
            chatId,
            message
        })
    } catch (e) {
        rejectWithValue('error')
    }
})
const getMessage = createAsyncThunk<any, void, { state: RootState }>('chat/getMessage', async (_, {
    rejectWithValue,
    getState
}) => {
    try {
        const {general} = getState()
        return await GreenService.GET<{ idMessage: string }>(`waInstance${general.idInstance}/receiveNotification/${general.apiTokenInstance}`)
    } catch (e) {
        rejectWithValue('error')
    }
})


export {fetchContacts, fetchMessageHistory, sendMessage, getMessage}
