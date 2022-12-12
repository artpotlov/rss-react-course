import { TFilterState } from './filter.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TFilterState = {
  sortType: 'ascName',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
