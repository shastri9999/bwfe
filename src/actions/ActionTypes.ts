import keys from './ActionTypeKeys';
import { UserType, ITodo } from '../types';

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

type ActionTypes =
  | ISignInAction
  | ISignOutAction
  | IAddTodoAction
  | IEditTodoAction
  | IMarkTodoCompleteAction
  | IMarkTodoInCompleteAction
  | IDeleteTodoAction;

export default ActionTypes;
