import {createSlice} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import * as reducers from "./actions";

const initialState: ChatState = {
    messages: []
}
export const chatSlice = createSlice({
    name: 'shat',
    initialState,
    reducers,
    extraReducers: ({addCase}) => {
    },
});

export const chatActions = chatSlice.actions
export const chatReducer = chatSlice.reducer
