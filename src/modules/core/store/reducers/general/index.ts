import {createSlice} from '@reduxjs/toolkit';
import {GeneralState} from './types';
import {fetchLogin} from "./actions";

const initialState: GeneralState = {
    apiTokenInstance: '672fe0e4805c4d4d911ab9fc31bfb2f0e8f580f6399d4573ae',
    isGeneralLoading: false,
    idInstance: '1101825409',
    isLogin: true
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
