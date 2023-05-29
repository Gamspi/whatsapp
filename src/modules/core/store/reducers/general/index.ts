import {createSlice} from '@reduxjs/toolkit';
import {GeneralState} from './types';
import {fetchLogin} from "./actions";

const initialState: GeneralState = {
    apiTokenInstance: '',
    isGeneralLoading: false,
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
            state.isGeneralLoading = false
        })
        addCase(fetchLogin.pending, (state) => {
            state.isGeneralLoading = true
        })
        addCase(fetchLogin.rejected, (state) => {
            state.isGeneralLoading = false
        })
    },
});

export const generalReducer = generalSlice.reducer;
