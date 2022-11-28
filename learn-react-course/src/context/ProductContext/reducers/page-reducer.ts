import React from 'react';
import { TPageAction, TPageState } from './types';

export const pageReducer: React.Reducer<TPageState, TPageAction> = (state, action): TPageState => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        currentPage: state.currentPage + 1,
      };
    case 'PREV_PAGE':
      return {
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};
