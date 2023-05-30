import {useState, useRef, useEffect} from "react";
import {Props} from "./type";

export const useController = ({messages}: Props) => {
    const [scrollBottom, setScrollBottom] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const [contentHeight, setContentHeight] = useState(0)

    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (containerRef.current && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
            setContainerHeight(containerRef.current.clientHeight)
        }
    }, [messages])
    return {
        contentRef,
        scrollBottom,
        containerRef,
        contentHeight,
        containerHeight,
        setScrollBottom,
    }
}
