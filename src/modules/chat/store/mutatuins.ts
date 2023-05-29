import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import {Contact, Message} from "../models/chat";

const addMessage = (state: Draft<ChatState>, {payload}: PayloadAction<Message>) => {
    state.messages = [...state.messages, payload]
}
const setChosenContact = (state: Draft<ChatState>, {payload}: PayloadAction<Contact | null>) => {
    state.chosenContact = payload
}
export {
    addMessage,
    setChosenContact
}
