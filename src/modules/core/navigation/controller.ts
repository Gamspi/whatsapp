import {useTypeSelector} from "../hooks/useTypeSelector";
import {useMemo} from "react";
import {privateRoutes, publicRoutes} from "./routes";

export const useController = () => {
    const {isLogin} = useTypeSelector(state => state.general)

    const currentRoutes = useMemo(()=> {
        return isLogin ? privateRoutes : publicRoutes
    }, [isLogin])
    return {
        currentRoutes
    }
}
