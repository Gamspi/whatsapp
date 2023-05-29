import React from 'react';
import {Provider} from 'react-redux';
import CoreLayout from "./layout/coreLayout/CoreLayout";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import store from "./store/store";
import {theme} from "./style/theme";
import {GlobalStyle} from "./style";

function Core() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <CoreLayout/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>

    );
}

export default Core;
