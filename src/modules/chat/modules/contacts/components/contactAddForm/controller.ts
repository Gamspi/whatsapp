import {Props} from "./types";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAction} from "../../../../../core/hooks/useActions";
import {ContactTypeEnum} from "../../../../helpers/enums/contactTypeEnum";

export const useController = ({setIsShow}: Props) => {
    const {addContact} = useAction()
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const closeHandler = () => {
        setIsShow(false)
    }
    const setNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const setTelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value)
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addContact({
            id: `${tel}@c.us`,
            type: ContactTypeEnum.USER,
            name,
            tel
        })
        setIsShow(false)
    }
    return {
        tel,
        name,
        closeHandler,
        setTelHandler,
        submitHandler,
        setNameHandler
    }
}
