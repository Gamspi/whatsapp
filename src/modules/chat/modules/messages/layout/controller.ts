import {useTypeSelector} from "../../../../core/hooks/useTypeSelector";
import {useEffect} from "react";
import {useAction} from "../../../../core/hooks/useActions";


export const useController = () => {
    const {fetchMessageHistory} = useAction()
    const {messages, chosenContact} = useTypeSelector(state => state.chat)
    useEffect(()=>{
        if(chosenContact) {
            fetchMessageHistory({contact:chosenContact, count: 20})
        }
    },[chosenContact])
    return {
        messages,
        chosenContact
    }
}
