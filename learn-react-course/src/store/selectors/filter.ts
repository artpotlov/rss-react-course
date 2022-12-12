import { TRootState } from '../store';

export const selectFilter = (state: TRootState) => state.filter;
export const selectSortType = (state: TRootState) => state.filter.sortType;
