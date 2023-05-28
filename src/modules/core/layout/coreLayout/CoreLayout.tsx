import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "../../components/notFoundPage/NotFoundPage";
const CoreLayout = () => {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <Suspense fallback="">
                       <>test</>
                    </Suspense>
                }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default CoreLayout;
