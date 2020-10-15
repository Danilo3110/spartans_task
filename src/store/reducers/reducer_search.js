import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  search_user: ''
};

const reducer_search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_DATA:
      return updateObject(state, { search_user: action.payload });
    default: return state;
  }
};

export default reducer_search;