import { ITodo, TodoStatus, UserType } from '../types';
import keys from './ActionTypeKeys';

export interface ISignInAction {
  readonly type: keys.LOGIN;
  readonly payload: {
    readonly authenticatedUser: UserType;
  };
}

export interface ISignOutAction {
  readonly type: keys.LOGOUT;
}

export interface IAddTodoAction {
  readonly type: keys.ADD_TODO;
  readonly payload: {
    readonly todo: ITodo;
  };
}

export interface IEditTodoAction {
  readonly type: keys.EDIT_TODO;
  readonly payload: {
    readonly id: string;
    readonly title: string;
    readonly summary: string;
  };
}

export interface IMarkTodoCompleteAction {
  readonly type: keys.MARK_TODO_COMPLETE;
  readonly payload: {
    readonly id: string;
  };
}

export interface IMarkTodoInCompleteAction {
  readonly type: keys.MARK_TODO_INCOMPLETE;
  readonly payload: {
    readonly id: string;
  };
}

export interface IDeleteTodoAction {
  readonly type: keys.DELETE_TODO;
  readonly payload: {
    readonly id: string;
  };
}

export interface IChangeFilterAction {
  readonly type: keys.CHANGE_FILTER;
  readonly payload: {
    readonly visibilityFilter: TodoStatus | null;
  };
}

type ActionTypes =
  | ISignInAction
  | ISignOutAction
  | IAddTodoAction
  | IEditTodoAction
  | IMarkTodoCompleteAction
  | IMarkTodoInCompleteAction
  | IDeleteTodoAction
  | IChangeFilterAction;

export default ActionTypes;
