import {Message, ResponseHistoryMessage} from "../../models/chat";
import {timeFormater} from "../formaters/timeFormater";

export const historyMessageConverter = ({idMessage, type, textMessage, timestamp}: ResponseHistoryMessage): Message => {
    return {
        id: idMessage,
        type,
        text: textMessage,
        time:     timeFormater(timestamp)
    }
}
