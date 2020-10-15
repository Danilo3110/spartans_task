import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { getUsersAll } from './users';
import { getReposData } from './repos';

export function* watch() {
  yield takeEvery(actionTypes.GET_USERS_ALL, getUsersAll);
  yield takeEvery(actionTypes.GET_REPOS_DATA, getReposData);
};