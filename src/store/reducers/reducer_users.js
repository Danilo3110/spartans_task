import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    usersAll: [],
    users_per_page: 10,
    loading: true
};

const reducer_users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.SET_USERS_ALL:
            return updateObject(state, { usersAll: action.payload, loading: false });
        case actionTypes.SET_USERS_PER_PAGE:
            return updateObject(state, { users_per_page: action.payload });
        default: return state;
    }
};

export default reducer_users;