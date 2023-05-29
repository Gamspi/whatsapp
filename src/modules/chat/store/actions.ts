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
export {fetchContacts, fetchMessageHistory}
