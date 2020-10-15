import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  user_repos: [],
  loading: true
};

const reducer_search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_REPOS_DATA:
      return updateObject(state, { user_repos: action.payload, loading: false });
    default: return state;
  }
};

export default reducer_search;