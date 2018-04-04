import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes, {
  IAddTodoAction,
  IEditTodoAction,
  IMarkTodoCompleteAction,
  IMarkTodoInCompleteAction,
  IDeleteTodoAction,
} from '../actions/ActionTypes';
import { UserType, ITodo, TodoStatus } from '../types';
import initialState from './initialState';

const onAddTodo = (
  action: IAddTodoAction,
  currentState: ReadonlyArray<ITodo>
): ReadonlyArray<ITodo> => {
  return [...currentState, action.payload.todo];
};

const onEditTodo = (
  action: IEditTodoAction,
  currentState: ReadonlyArray<ITodo>
): ReadonlyArray<ITodo> => {
  const { id, title, summary } = action.payload;
  return currentState.map((todo: ITodo): ITodo => {
    if (id === todo.id) {
      return {
        ...todo,
        id,
        title,
        summary,
      };
    }
    return todo;
  });
};

const onMarkTodoComplete = (
  action: IMarkTodoCompleteAction,
  currentState: ReadonlyArray<ITodo>
): ReadonlyArray<ITodo> => {
  const { id } = action.payload;
  return currentState.map((todo: ITodo): ITodo => {
    if (id === todo.id) {
      return {
        ...todo,
        status: TodoStatus.Completed,
      };
    }
    return todo;
  });
};

const onMarkTodoInComplete = (
  action: IMarkTodoInCompleteAction,
  currentState: ReadonlyArray<ITodo>
): ReadonlyArray<ITodo> => {
  const { id } = action.payload;
  return currentState.map((todo: ITodo): ITodo => {
    if (id === todo.id) {
      return {
        ...todo,
        status: TodoStatus.Incomplete,
      };
    }
    return todo;
  });
};

const onDeleteTodo = (
  action: IDeleteTodoAction,
  currentState: ReadonlyArray<ITodo>
): ReadonlyArray<ITodo> => {
  const { id } = action.payload;
  return currentState.filter((todo: ITodo) => {
    return todo.id !== id;
  });
};

export default function todosReducer(
  state: ReadonlyArray<ITodo> = initialState.todos,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.ADD_TODO:
      return onAddTodo(action, state);
    case ActionTypeKeys.EDIT_TODO:
      return onEditTodo(action, state);
    case ActionTypeKeys.DELETE_TODO:
      return onDeleteTodo(action, state);
    case ActionTypeKeys.MARK_TODO_COMPLETE:
      return onMarkTodoComplete(action, state);
    case ActionTypeKeys.MARK_TODO_INCOMPLETE:
      return onMarkTodoInComplete(action, state);
    default:
      return state;
  }
}
