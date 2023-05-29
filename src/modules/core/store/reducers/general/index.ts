import {createSlice} from '@reduxjs/toolkit';
import {GeneralState} from './types';
import {fetchLogin} from "./actions";

const initialState: GeneralState = {
    apiTokenInstance: '',
    idInstance: '',
    isLogin: false
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {},
    extraReducers: ({addCase}) => {
        addCase(fetchLogin.fulfilled, (state, {meta: {arg}}) => {
            state.idInstance = arg.idInstance
            state.apiTokenInstance = arg.apiTokenInstance
            state.isLogin = true
        })
    },
});

export const generalReducer = generalSlice.reducer;
