import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import {Contact, Message} from "../models/chat";

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
    state.contacts = [...state.contacts, {
        ...payload,
        count: 0
    }]
}
export {
    addContact,
    setChosenContact
}
