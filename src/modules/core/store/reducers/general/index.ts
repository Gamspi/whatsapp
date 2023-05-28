import {createSlice} from '@reduxjs/toolkit';
import {GeneralState} from './types';
const initialState: GeneralState = {

};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {},
  extraReducers: ({addCase}) => {
  },
});

export default generalSlice.reducer;
