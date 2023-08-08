import { combineReducers } from 'redux';

import posts from './posts';
import auth from '.';

export const reducers = combineReducers({ posts, auth });
