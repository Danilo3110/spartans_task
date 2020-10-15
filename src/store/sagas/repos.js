import { put } from 'redux-saga/effects';
import { api_axios } from '../../api';
import { handleErrors } from '../../components/Functions';

import * as actions from '../actions';

// Function for getting all repos data from selected user
export function* getReposData(action) {
  try {
    const response = yield api_axios('GET', `/users/${action.payload}/repos?per_page=10`, null);

    const reposAll = response.data;
    yield put(actions.setReposData(reposAll));

  } catch (error) {
    handleErrors(error);
  }
};