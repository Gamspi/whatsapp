import {Draft, PayloadAction} from "@reduxjs/toolkit";
import {GeneralState} from "./types";

const setIsLoginError = (state: Draft<GeneralState>, action: PayloadAction<boolean>) => {
    state.isLoginError = action.payload
}
export {setIsLoginError}
