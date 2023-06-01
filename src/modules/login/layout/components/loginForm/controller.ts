import {FormEvent, useState} from "react";
import {useAction} from "../../../../core/hooks/useActions";
import {useTypeSelector} from "../../../../core/hooks/useTypeSelector";

export const useController = () => {
    const {fetchLogin, setIsLoginError} = useAction()
    const {isLoginError} = useTypeSelector(state => state.general)
    const [apiTokenInstance, setApiTokenInstance] = useState('')
    const [idInstance, setIdInstance] = useState('')
    const submitLoginFormHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchLogin({idInstance, apiTokenInstance})
        setIdInstance('' )
        setApiTokenInstance('' )
    }
    const setApiTokenInstanceHandler = (e: FormEvent<HTMLInputElement>) => {
        setApiTokenInstance(e.currentTarget.value)

    }
    const setIdInstanceHandler = (e: FormEvent<HTMLInputElement>) => {
        setIdInstance(e.currentTarget.value)
    }
    const closeNotification = () => {
        setIsLoginError(false)
    }
    return {
        idInstance,
        isLoginError,
        apiTokenInstance,
        closeNotification,
        setIdInstanceHandler,
        submitLoginFormHandler,
        setApiTokenInstanceHandler,
    }
}
