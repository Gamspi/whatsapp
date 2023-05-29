import {chatActions} from "../../chat/store";
import * as generalActions from "./reducers/general/actions";

const allActions = {
    ...chatActions,
    ...generalActions
};
export default allActions;

