import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {useEffect} from "react";
import {useAction} from "../../../core/hooks/useActions";

export const useController = () => {
    const {chosenContact, isLoading, isFetchNotification} = useTypeSelector(state => state.chat)
    const {getMessage} = useAction()

    useEffect(() => {
        if (!isFetchNotification) {
            getMessage()
        }
    }, [isFetchNotification])

    return {chosenContact, isLoading}
}
