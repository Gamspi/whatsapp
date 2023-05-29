import {createSlice} from "@reduxjs/toolkit";
import {ChatState} from "./type";
import * as reducers from "./mutatuins";
import * as extraReducers from './actions'

const {fetchContacts} = extraReducers
const initialState: ChatState = {
    messages: []
}
export const chatSlice = createSlice({
    name: 'shat',
    initialState,
    reducers,
    extraReducers: ({addCase}) => {
        addCase(fetchContacts.fulfilled, (state, action) => {
            console.log('fetchContacts',action)
        })
        addCase(fetchContacts.rejected, () => {
            alert('error')
        })
    },
});

export const chatActions = {...chatSlice.actions, ...extraReducers}
export const chatReducer = chatSlice.reducer
