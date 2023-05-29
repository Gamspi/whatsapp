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
        addCase(fetchLogin.fulfilled, (state) => {
            state.isLogin = true
        })
    },
});

export const generalReducer = generalSlice.reducer;
