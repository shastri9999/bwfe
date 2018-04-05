import * as React from 'react';
import { IStoreState, ITodo, TodoStatus, UserType } from '../../types';

export interface ITodoProps {
  readonly authenticatedUser: UserType;
  readonly todo: ITodo;
  onStatusClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onDeleteClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onEditClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
const Todo: React.SFC<ITodoProps> = ({
  todo,
  authenticatedUser,
  onStatusClick,
  onDeleteClick,
  onEditClick,
}) => {
  const actions = [TodoStatus.Completed, TodoStatus.Incomplete];
  return (
    <div
      className={`todo ${
        todo.status === TodoStatus.Incomplete ? 'active' : 'done'
      }`}
    >
      <div className="id">{todo.id}</div>
      <div className="title">{todo.title}</div>
      <div className="summary">{todo.summary}</div>
      <div className="status">
        {todo.status}
        {authenticatedUser === UserType.Employee ? (
          <a href="#" onClick={onStatusClick} className="action">
            Mark {actions.filter(s => s !== todo.status)[0]}
          </a>
        ) : (
          <React.Fragment>
            <a href="#" onClick={onEditClick} className="action">
              Edit
            </a>
            <a href="#" onClick={onDeleteClick} className="action">
              Delete
            </a>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Todo;
