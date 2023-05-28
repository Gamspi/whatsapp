import React from 'react';
import {Provider} from 'react-redux';
import CoreLayout from "./layout/coreLayout/CoreLayout";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";

function Core() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <CoreLayout/>
            </Provider>
        </BrowserRouter>

    );
}

export default Core;
