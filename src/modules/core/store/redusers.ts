import {generalReducer} from './reducers/general'
import {chatReducer} from "../../chat/store";

export default {
    general: generalReducer,
    chat: chatReducer,
}
