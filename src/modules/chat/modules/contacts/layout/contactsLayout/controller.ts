import {useEffect} from "react";
import {useAction} from "../../../../../core/hooks/useActions";
import {useTypeSelector} from "../../../../../core/hooks/useTypeSelector";

export const useController = () => {
    const {fetchContacts} = useAction()
    const {contacts} = useTypeSelector(state => state.chat)
    useEffect(()=>{
        fetchContacts()
    }, [])
    return {
        contacts
    }
}
