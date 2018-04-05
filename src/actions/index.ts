import * as Types from '../types';
import keys from './ActionTypeKeys';
import * as ActionTypes from './ActionTypes';

export const signIn = (
  authenticatedUser: Types.UserType
): ActionTypes.ISignInAction => ({
  payload: {
    authenticatedUser,
  },
  type: keys.LOGIN,
});

export const signOut = (): ActionTypes.ISignOutAction => ({
  type: keys.LOGOUT,
});

export const addTodo = (todo: Types.ITodo): ActionTypes.IAddTodoAction => ({
  payload: {
    todo,
  },
  type: keys.ADD_TODO,
});

export const editTodo = (
  id: string,
  title: string,
  summary: string
): ActionTypes.IEditTodoAction => ({
  payload: {
    id,
    summary,
    title,
  },
  type: keys.EDIT_TODO,
});

export const markTodoComplete = (
  id: string
): ActionTypes.IMarkTodoCompleteAction => ({
  payload: { id },
  type: keys.MARK_TODO_COMPLETE,
});

export const markTodoInComplete = (
  id: string
): ActionTypes.IMarkTodoInCompleteAction => ({
  payload: { id },
  type: keys.MARK_TODO_INCOMPLETE,
});

export const deleteTodo = (id: string): ActionTypes.IDeleteTodoAction => ({
  payload: { id },
  type: keys.DELETE_TODO,
});

export const changeFilter = (
  visibilityFilter: Types.TodoStatus | null
): ActionTypes.IChangeFilterAction => ({
  payload: { visibilityFilter },
  type: keys.CHANGE_FILTER,
});
