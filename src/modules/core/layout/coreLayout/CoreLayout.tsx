import React, {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "../../components/notFoundPage/NotFoundPage";

const ChatComponent = lazy(() => import('../../../chat/Chat'))
const CoreLayout = () => {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <Suspense fallback="">
                        <ChatComponent/>
                    </Suspense>
                }
            />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default CoreLayout;
