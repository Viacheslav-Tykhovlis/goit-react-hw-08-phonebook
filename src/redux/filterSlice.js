import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    chngFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { chngFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
