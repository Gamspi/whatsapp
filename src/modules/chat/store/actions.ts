import {createAsyncThunk} from "@reduxjs/toolkit";
import {GreenService} from "../../core/api/greenService";
import {useTypeSelector} from "../../core/hooks/useTypeSelector";

const fetchContacts = createAsyncThunk('chat/fetchContacts', async (args, {rejectWithValue}) =>{

    try {
        const {idInstance, apiTokenInstance} = useTypeSelector(state => state.general)
        GreenService.GET(`waInstance${idInstance}/getContacts/${apiTokenInstance}`)
    }catch (e) {
        rejectWithValue('error')
    }
})
export {fetchContacts}
