import {useEffect, useMemo, useRef, useState} from "react";
type Args = {
    onClose: () => void
    isShow: boolean
}

export const useController = ({onClose,isShow} : Args) => {
    const [idTimeout, setIdTimeout] = useState<NodeJS.Timeout | null>(null)
    const nodeRef = useRef(null)
    const nodeElement = useMemo(() => document.createElement('div',), [])
    useEffect(() => {
        if (idTimeout) {
            clearTimeout(idTimeout)
            setIdTimeout(null)
        }
        setIdTimeout(setTimeout(() => {
            onClose()
        }, 3000))
    }, [isShow])
    useEffect(() => {
        const notificationRootElement = document.querySelector('#notification')
        notificationRootElement?.appendChild(nodeElement)
        return () => {
            notificationRootElement?.removeChild(nodeElement)
        }
    }, [nodeElement])
    return {
        nodeRef,
        nodeElement
    }
}
