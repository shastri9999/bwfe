import { combineReducers } from 'redux';
import { IStoreState } from '../types';
import authenticatedUser from './authenticationReducer';
import todos from './todosReducer';
import visibilityFilter from './visibilityFilterReducer';

const rootReducer = combineReducers<IStoreState>({
  authenticatedUser,
  todos,
  visibilityFilter,
});

export default rootReducer;
