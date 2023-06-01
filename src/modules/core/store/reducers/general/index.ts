import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GeneralState} from './types';
import * as actions from "./actions";
const {fetchLogin} = actions
const initialState: GeneralState = {
    apiTokenInstance: '',
    isGeneralLoading: false,
    idInstance: '',
    isLogin: false,
    isLoginError: false
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsLoginError : (state, action:PayloadAction<boolean>) =>{
            state.isLoginError = action.payload
        }
    },
    extraReducers: ({addCase}) => {
        addCase(fetchLogin.fulfilled, (state, {meta: {arg}}) => {
            state.idInstance = arg.idInstance
            state.apiTokenInstance = arg.apiTokenInstance
            state.isLogin = true
            state.isGeneralLoading = false
        })
        addCase(fetchLogin.pending, (state) => {
            state.isGeneralLoading = true
        })
        addCase(fetchLogin.rejected, (state) => {
            state.isLoginError = true
            state.isGeneralLoading = false
        })
    },
});
export const generalActions = {...generalSlice.actions, ...actions}

export const generalReducer = generalSlice.reducer;
