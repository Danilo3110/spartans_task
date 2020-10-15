import * as actionTypes from './actionTypes';

export const getReposData = (user) => {
  return {
    type: actionTypes.GET_REPOS_DATA,
    payload: user
  }
};

export const setReposData = (repos) => {
  return {
    type: actionTypes.SET_REPOS_DATA,
    payload: repos
  }
};