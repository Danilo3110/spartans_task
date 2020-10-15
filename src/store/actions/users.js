import * as actionTypes from './actionTypes';

export const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
};

export const getUsersAll = () => {
    return {
        type: actionTypes.GET_USERS_ALL
    }
};

export const setUsersAll = (data) => {
    return {
        type: actionTypes.SET_USERS_ALL,
        payload: data
    }
};

export const setUsersPerPage = (per_page) => {
    return {
        type: actionTypes.SET_USERS_PER_PAGE,
        payload: per_page
    }
};

export const setUserData = (selected_user) => {
    return {
        type: actionTypes.SET_USER_DATA,
        payload: selected_user
    }
};