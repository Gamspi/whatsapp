import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import {Contact} from "../models/chat";

const setChosenContact = (state: Draft<ChatState>, {payload}: PayloadAction<Contact | null>) => {
    if (payload) {
        state.contacts = [...state.contacts.map(item => {
            if (item.id === payload.id) {
                return {
                    ...item,
                    count: 0
                }
            }
            return item
        })]
    }
    state.messages = []
    state.chosenContact = payload
}
const addContact = (state: Draft<ChatState>, {payload}: PayloadAction<Omit<Contact, 'count'>>) => {
    const existContact = state.contacts.find(item => item.id === payload.id)
    if (existContact) {
        state.chosenContact = existContact
    } else {
        const contact = {
            ...payload,
            count: 0
        }
        state.contacts = [...state.contacts, contact]
        state.chosenContact = contact
    }

}
const setIsSendMessageError = (state: Draft<ChatState>, {payload}: PayloadAction<boolean>) => {
    state.isSendMessageError = payload
}
const setIsGetHistoryError = (state: Draft<ChatState>, {payload}: PayloadAction<boolean>) => {
    state.isGetHistoryError = payload
}
export {
    addContact,
    setChosenContact,
    setIsGetHistoryError,
    setIsSendMessageError
}
