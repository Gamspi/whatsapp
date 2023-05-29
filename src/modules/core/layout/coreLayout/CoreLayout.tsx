import React, {Suspense, memo} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "../../components/notFoundPage/NotFoundPage";
import {useController} from "./controller";


const CoreLayout = () => {
    const {currentRoutes} = useController()
    return (
        <Routes>
            {
                currentRoutes.map(({path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback="">
                                {Component}
                            </Suspense>
                        }
                    />))
            }

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default memo(CoreLayout);
