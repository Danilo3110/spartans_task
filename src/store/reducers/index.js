import { combineReducers } from 'redux';

import users from './reducer_users';
import search from './reducer_search';
import repos from './reducer_repos';

const reducers = combineReducers({
    users,
    search,
    repos
});

export default reducers;