import { put } from 'redux-saga/effects';
import { api_axios } from '../../api/api';
import { handleErrors } from '../../components/Functions';

import * as actions from '../actions';

// Function for getting all users from api
export function* getUsersAll() {
  try {
    const response = yield api_axios('GET', `/users?per_page=20`, null);

    const usersAll = response.data;
    yield put(actions.setUsersAll(usersAll));

  } catch (error) {
    const errors = handleErrors(error);
    yield put(actions.setErrorMessage(errors));
  }
};