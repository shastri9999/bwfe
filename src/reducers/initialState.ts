import { IStoreState } from '../types';

const defaultState: IStoreState = {
  authenticatedUser: null,
  todos: [],
  visibilityFilter: null,
};

export default defaultState;
