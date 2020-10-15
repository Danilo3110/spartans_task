import * as actionTypes from './actionTypes';

export const setErrorMessage = (error) => {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    payload: error
  }
};