import * as actionTypes from './actionTypes';

export const setSearchData = (search) => {
  return {
    type: actionTypes.SET_SEARCH_DATA,
    payload: search
  }
};