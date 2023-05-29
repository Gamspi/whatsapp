import {FormEvent, useState} from "react";
import {useAction} from "../../../../core/hooks/useActions";

export const useController = () => {
    const {fetchLogin} = useAction()
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
    return {
        idInstance,
        apiTokenInstance,
        setIdInstanceHandler,
        submitLoginFormHandler,
        setApiTokenInstanceHandler,
    }
}
