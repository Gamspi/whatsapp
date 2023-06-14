import {Props} from "./types";
import {ChangeEvent, FormEvent, useMemo, useRef, useState} from "react";
import {useAction} from "../../../../../core/hooks/useActions";
import {ContactTypeEnum} from "../../../../helpers/enums/contactTypeEnum";
import {phoneLength} from "../../../../../core/constants/phoneMask";
import login from "../../../../../login/Login";

export const useController = ({setIsShow}: Props) => {
    const ref = useRef(null)
    const {addContact} = useAction()
    const [name, setName] = useState({value: '', isError: false})
    const [tel, setTel] = useState({value: '', isError: false})
    const checkIsValidForm = () => {
        const isValidPhone = tel.value.replace(/\D/g, '').length === phoneLength
        if (!isValidPhone) setTel(prevState => ({...prevState, isError: true}))
        if (!name.value) setName(prevState => ({...prevState, isError: true}))
        return name && isValidPhone
    }
    const clearForm = () => {
        setName({isError: false, value: ''})
        setTel({isError: false, value: ''})
    }
    const closeHandler = () => {
        setIsShow(false)
        clearForm()
    }
    const setNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName({isError: false, value: e.target.value})
    }
    const setTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTel({isError: false, value: e.target.value})
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (checkIsValidForm()) {
            const phone = tel.value.replace(/\D/g, '')
            addContact({
                id: `${phone}@c.us`,
                type: ContactTypeEnum.USER,
                name: name.value,
                tel: phone
            })
            setIsShow(false)
            clearForm()
        }

    }
    return {
        ref,
        tel,
        name,
        closeHandler,
        setTelHandler,
        submitHandler,
        setNameHandler
    }
}
