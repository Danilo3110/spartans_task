import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    usersAll: [],
    selected_user: {},
    users_per_page: 10,
    loading: true,
    errors: ''
};

const reducer_users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_LOADING:
            return updateObject(state, { loading: true });
        case actionTypes.SET_USERS_ALL:
            return updateObject(state, { usersAll: action.payload, loading: false });
        case actionTypes.SET_USERS_PER_PAGE:
            return updateObject(state, { users_per_page: action.payload });
        case actionTypes.SET_USER_DATA:
            return updateObject(state, { selected_user: action.payload });
        case actionTypes.SET_ERROR_MESSAGE:
            return updateObject(state, { errors: action.payload, loading: false });
        default: return state;
    }
};

export default reducer_users;