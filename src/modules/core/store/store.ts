import slices from './redusers';
// import reducers from 'reducers';
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';

/**
 * Создание хранилища Redux
 */
const rootReducer = combineReducers({
  ...slices
});

const store = configureStore({
  reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
