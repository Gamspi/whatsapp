import {createAsyncThunk} from "@reduxjs/toolkit";
import {GreenService} from "../../core/api/greenService";
import {useTypeSelector} from "../../core/hooks/useTypeSelector";
import {RootState} from "../../core/store/store";

const fetchContacts = createAsyncThunk<any, void, {state: RootState}>('chat/fetchContacts', async (args, {rejectWithValue, getState}) =>{
    try {
        const {general} = getState()
       return await GreenService.GET(`waInstance${general.idInstance}/getContacts/${general.apiTokenInstance}`)
    }catch (e) {
        rejectWithValue('error')
    }
})
export {fetchContacts}
