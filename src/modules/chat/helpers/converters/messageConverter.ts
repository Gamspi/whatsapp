import {Message, ResponseMessage} from "../../models/chat";
import {timeFormater} from "../formaters/timeFormater";
import {TypeMessageEnum} from "../enums/typeMessageEnum";

export const messageConverter = ({body}: ResponseMessage): Message => {
    return {
        id: body.idMessage,
        time: timeFormater(body.timestamp),
        text: body.messageData.textMessageData.textMessage,
        type: TypeMessageEnum.INCOMING
    }
}
