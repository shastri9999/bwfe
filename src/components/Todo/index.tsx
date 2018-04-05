import * as React from 'react';
import { IStoreState, ITodo, TodoStatus, UserType } from '../../types';

export interface ITodoProps {
  readonly authenticatedUser: UserType;
  readonly todo: ITodo;
}
const Todo: React.SFC<ITodoProps> = ({ todo }) => {
  return (
    <div
      className={`todo ${
        todo.status === TodoStatus.Incomplete ? 'active' : 'done'
      }`}
    >
      <div className="id">{todo.id}</div>
      <div className="title">{todo.title}</div>
      <div className="summary">{todo.summary}</div>
      <div className="status">{todo.status}</div>
    </div>
  );
};

export default Todo;
