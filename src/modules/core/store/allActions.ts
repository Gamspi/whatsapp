import {chatActions} from "../../chat/store";
import {generalActions} from "./reducers/general";


const allActions = {
    ...chatActions,
    ...generalActions
};
export default allActions;

