import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import {Message} from "../models/chat";

const addMessage = (state: Draft<ChatState>, {payload}: PayloadAction<Message>) => {
    state.messages = [...state.messages, payload]
}
export {
    addMessage
}
