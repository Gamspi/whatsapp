import {GreenService} from "../../../api/greenService";
import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchLogin = createAsyncThunk('' +
    'general/fetchLogin',
    async ({
               idInstance,
               apiTokenInstance
           }: { idInstance: string, apiTokenInstance: string }, {rejectWithValue}) => {
        try {
            return GreenService.GET(`/waInstance${idInstance}/getStatusInstance/${apiTokenInstance}`)
        } catch (e) {
            rejectWithValue('error')
        }

    })
export {
    fetchLogin
}
