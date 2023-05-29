import {FormEvent, useState} from "react";

export const useController = () => {
    const [apiTokenInstance, setApiTokenInstance] = useState('')
    const [idInstance, setIdInstance] = useState('')
    const submitLoginFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit')
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
