import {useTypeSelector} from "../../../core/hooks/useTypeSelector";

export const useController = () => {
    const {messages} = useTypeSelector(state => state.chat)
    return {
        messages
    }
}
