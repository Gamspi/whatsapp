import {useEffect} from "react";
import {useAction} from "../../../../../core/hooks/useActions";

export const useController = () => {
    const {fetchContacts} = useAction()
    useEffect(()=>{
        fetchContacts()
    }, [])
    return {

    }
}
