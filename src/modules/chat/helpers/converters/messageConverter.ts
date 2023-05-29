import {Message, ResponseMessage} from "../../models/chat";
import {timeFormater} from "../formaters/timeFormater";

export const messageConverter = ({body}: ResponseMessage): Message => {
    timeFormater(body.timestamp)
    return {
        id: body.idMessage,
        time: timeFormater(body.timestamp),
        text: body.messageData.textMessageData.textMessage,
        userName: body.senderData.senderName
    }
}
