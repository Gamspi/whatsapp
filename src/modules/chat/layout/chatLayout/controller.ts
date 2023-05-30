import {useTypeSelector} from "../../../core/hooks/useTypeSelector";

export const useController = () => {
    const {chosenContact, isLoading} = useTypeSelector(state => state.chat)
    return {chosenContact, isLoading}
}
