import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';

const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
