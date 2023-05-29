import {useTypeSelector} from "../../hooks/useTypeSelector";

export const useController = () => {
    const {isGeneralLoading} = useTypeSelector(state => state.general)

    return {
        isGeneralLoading
    }
}
