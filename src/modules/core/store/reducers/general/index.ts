import {createSlice} from '@reduxjs/toolkit';
import {GeneralState} from './types';

const initialState: GeneralState = {
    apiTokenInstance: '',
    idInstance: ''
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {},
    extraReducers: ({addCase}) => {
    },
});

export const generalReducer =  generalSlice.reducer;
