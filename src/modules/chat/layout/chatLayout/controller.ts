import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {useEffect} from "react";
import {useAction} from "../../../core/hooks/useActions";

export const useController = () => {
    const {chosenContact, isLoading} = useTypeSelector(state => state.chat)
    const {getMessage} = useAction()
    const getMessageCallback = () => {
        console.log('fetch')
        getMessage()
        // axios.get<ResponseMessage>(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`).then(({data}) => {
        //     // console.log(data)
        //     if (data) {
        //         addMessage(messageConverter(data))
        //     }
        //
        // }).finally(() => {
        //     // getMessage()
        // })
    }
    useEffect(() => {
        getMessageCallback()
    }, [])
    return {chosenContact, isLoading}
}
