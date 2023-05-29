import {lazy} from "react";
const LoginComponent = lazy(()=> import('../../login/Login'))
const ChatComponent = lazy(() => import('../../chat/Chat'))

export const publicRoutes = [
    {
        path: '/*',
        Component: <LoginComponent/>
    }
]

export const privateRoutes = [
    {
        path: '/*',
        Component: <ChatComponent/>
    }
]
