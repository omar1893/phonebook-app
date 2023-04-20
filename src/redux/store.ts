import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './reducer';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;