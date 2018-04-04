import * as ActionTypes from './ActionTypes';
import keys from './ActionTypeKeys';
import * as Types from '../types';

export const signIn = (
  authenticatedUser: Types.UserType
): ActionTypes.ISignInAction => ({
  type: keys.LOGIN,
  payload: {
    authenticatedUser,
  },
});

export const signOut = (): ActionTypes.ISignOutAction => ({
  type: keys.LOGOUT,
});

export const addTodo = (todo: Types.ITodo): ActionTypes.IAddTodoAction => ({
  type: keys.ADD_TODO,
  payload: {
    todo,
  },
});

export const markTodoComplete = (
  id: string
): ActionTypes.IMarkTodoCompleteAction => ({
  type: keys.MARK_TODO_COMPLETE,
  payload: { id },
});

export const markTodoInComplete = (
  id: string
): ActionTypes.IMarkTodoInCompleteAction => ({
  type: keys.MARK_TODO_INCOMPLETE,
  payload: { id },
});

export const deleteTodo = (id: string): ActionTypes.IDeleteTodoAction => ({
  type: keys.DELETE_TODO,
  payload: { id },
});
