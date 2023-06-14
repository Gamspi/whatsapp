import {useEffect, useMemo, useRef} from "react";

export const useController =() => {
    const nodeElement = useMemo(() => document.createElement('div',), [])
    const ref = useRef(null)
    useEffect(() => {
        const notificationRootElement = document.querySelector('#loader')
        notificationRootElement?.appendChild(nodeElement)

        return () => {
            notificationRootElement?.removeChild(nodeElement)
        }
    }, [nodeElement])
    return {
        ref,
        nodeElement
    }
}
