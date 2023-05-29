import {useAction} from "../../../../../core/hooks/useActions";
import {Contact} from "../../../../models/chat";

export const useController = () => {
    const {setChosenContact} = useAction()
    const chooseContactHandler = (contact: Contact) => {
        setChosenContact(contact)
    }
    return {chooseContactHandler}
}
