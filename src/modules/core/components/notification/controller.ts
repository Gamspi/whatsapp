import {useEffect, useMemo, useState} from "react";

export const useController = (onClose: () => void) => {
    const [idTimeout, setIdTimeout] = useState<NodeJS.Timeout | null>(null)
    const nodeElement = useMemo(() => document.createElement('div',), [])
    useEffect(() => {
        const notificationRootElement = document.querySelector('#notification')
        notificationRootElement?.appendChild(nodeElement)
        if (idTimeout) clearTimeout(idTimeout)
        setIdTimeout(setTimeout(() => {
            onClose()
        }, 3000))
        return () => {
            notificationRootElement?.removeChild(nodeElement)
        }
    }, [nodeElement, onClose])
    return {nodeElement}
}
