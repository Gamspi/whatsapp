import slices from './redusers';
// import reducers from 'reducers';
import {configureStore, combineReducers} from '@reduxjs/toolkit';

/**
 * Создание хранилища Redux
 */
const rootReducer = combineReducers({
  ...slices
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
