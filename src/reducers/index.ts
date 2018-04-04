import { combineReducers } from 'redux';
import { IStoreState } from '../types';
import authenticatedUser from './authenticationReducer';
import todos from './todosReducer';

const rootReducer = combineReducers<IStoreState>({
  authenticatedUser,
  todos,
});

export default rootReducer;
