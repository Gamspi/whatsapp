import {useEffect, useMemo} from "react";

export const useController =() => {
    const nodeElement = useMemo(() => document.createElement('div',), [])
    useEffect(() => {
        const notificationRootElement = document.querySelector('#loader')
        notificationRootElement?.appendChild(nodeElement)

        return () => {
            notificationRootElement?.removeChild(nodeElement)
        }
    }, [nodeElement])
    return {
        nodeElement
    }
}
