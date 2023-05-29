import {ContactTypeEnum} from "../helpers/enums/contactTypeEnum";
import {ContentTypeMessageEnum, TypeMessageEnum} from "../helpers/enums/typeMessageEnum";

export interface Message {
    id: string,
    text: string,
    time: string,
    type: TypeMessageEnum
}

export interface ResponseHistoryMessage {
    chatId: string
    idMessage: string
    senderId: string
    senderName: string
    textMessage: string
    timestamp: number
    type: TypeMessageEnum
    typeMessage: ContentTypeMessageEnum
}

export interface ResponseMessage {
    receiptId: number,
    body: {
        typeWebhook: string,
        instanceData: {
            idInstance: number,
            wid: string,
            typeInstance: string
        },
        timestamp: number,
        idMessage: string,
        senderData: {
            chatId: string,
            sender: string,
            senderName: string
        },
        messageData: {
            typeMessage: string,
            textMessageData: {
                textMessage: string
            }
        }
    }
}

export interface Contact {
    id: string,
    name: string,
    type: ContactTypeEnum,
    tel: string
}

export interface ResponseContact {
    id: string,
    name: string,
    type: ContactTypeEnum
}
