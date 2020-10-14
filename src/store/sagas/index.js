import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { getUsersAll } from './users';

export function* watch() {
  yield takeEvery(actionTypes.GET_USERS_ALL, getUsersAll);
};