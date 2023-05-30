import {useEffect, useState} from "react";
import {useAction} from "../../../../../core/hooks/useActions";
import {useTypeSelector} from "../../../../../core/hooks/useTypeSelector";

export const useController = () => {
    const {fetchContacts} = useAction()
    const [isShowAddForm, setIsShowAddForm] = useState(false)
    const {contacts} = useTypeSelector(state => state.chat)
    const showAddFormHandler = () => {
        setIsShowAddForm(true)
    }
    useEffect(() => {
        fetchContacts()
    }, [])
    return {
        contacts,
        isShowAddForm,
        setIsShowAddForm,
        showAddFormHandler
    }
}
