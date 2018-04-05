import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes, { IChangeFilterAction } from '../actions/ActionTypes';
import { TodoStatus } from '../types';
import initialState from './initialState';

const onFilterChange = (action: IChangeFilterAction): TodoStatus | null => {
  return action.payload.visibilityFilter;
};

export default function visibilityFilterReducer(
  state: TodoStatus | null = initialState.visibilityFilter,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.CHANGE_FILTER:
      return onFilterChange(action);
    default:
      return state;
  }
}
