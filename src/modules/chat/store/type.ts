import {Contact, Message} from "../models/chat";

export type ChatState = {
    messages: Message [],
    contacts: Contact [],
    chosenContact: Contact | null
}
