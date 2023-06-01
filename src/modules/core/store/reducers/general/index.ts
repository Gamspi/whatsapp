import {createSlice} from '@reduxjs/toolkit';
import {GeneralState} from './types';
import * as actions from "./actions";
import * as reducers from "./mutations";
import {StatusInstanceEnum} from "../../../helpers/enums/statusInstanceEnum";
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
    reducers,
    extraReducers: ({addCase}) => {
        addCase(fetchLogin.fulfilled, (state, {payload, meta: {arg}}) => {
            console.log(payload)
            if(payload?.data?.statusInstance === StatusInstanceEnum.ONLINE){
                state.idInstance = arg.idInstance
                state.apiTokenInstance = arg.apiTokenInstance
                state.isLogin = true
            }else {
                state.isLoginError = true
            }
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
