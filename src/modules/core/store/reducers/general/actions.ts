import {GreenService} from "../../../api/greenService";
import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchLogin = createAsyncThunk<any,  { idInstance: string, apiTokenInstance: string }>(
    'general/fetchLogin',
    async ({
               idInstance,
               apiTokenInstance
           }, {rejectWithValue}) => {
        try {
            return GreenService.GET(`/waInstance${idInstance}/getStatusInstance/${apiTokenInstance}`)
        } catch (e) {
            rejectWithValue('error')
        }

    })
export {
    fetchLogin
}
