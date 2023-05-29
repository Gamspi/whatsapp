import {chatActions} from "../../chat/store";
import {fetchLogin} from "./reducers/general/actions";

const allActions = {
    ...chatActions,
    fetchLogin
};
export default allActions;

