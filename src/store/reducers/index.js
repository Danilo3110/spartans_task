import { combineReducers } from 'redux';

import users from './reducer_users';

const reducers = combineReducers({
    users,
});

export default reducers;