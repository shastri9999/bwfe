import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import {
  deleteTodo as deleteTodoAction,
  markTodoComplete as markTodoCompleteAction,
  markTodoInComplete as markTodoInCompleteAction,
} from '../../actions';
import {
  IDeleteTodoAction,
  IMarkTodoCompleteAction,
  IMarkTodoInCompleteAction,
} from '../../actions/ActionTypes';
import { createPath, todosPath } from '../../routes/paths';
import { IStoreState, ITodo, TodoStatus, UserType } from '../../types';
import Button from '../Button';
import Todo from '../Todo';

export interface ITodosPageProps extends RouteComponentProps<any> {
  readonly authenticatedUser: UserType;
  readonly todos: ITodo[];
  deleteTodo: (id: string) => IDeleteTodoAction;
  markComplete: (id: string) => IMarkTodoCompleteAction;
  markInComplete: (id: string) => IMarkTodoInCompleteAction;
}

class TodosPage extends React.Component<ITodosPageProps> {
  public render() {
    const { authenticatedUser, todos } = this.props;
    return (
      <div className="todos-page">
        <h2>
          Todos{authenticatedUser === UserType.Manager ? (
            <NavLink
              to={createPath}
              className="nav-link"
              activeClassName="active"
            >
              + Add New Todo
            </NavLink>
          ) : null}
        </h2>
        <div className="todos">
          {todos.map((todo: ITodo) => (
            <Todo
              authenticatedUser={authenticatedUser}
              todo={todo}
              key={todo.id}
              onStatusClick={this.toggleTodo(todo)}
              onDeleteClick={this.deleteTodo(todo)}
            />
          ))}
        </div>
      </div>
    );
  }

  private toggleTodo = (todo: ITodo) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    if (todo.status === TodoStatus.Completed) {
      this.props.markInComplete(todo.id);
    } else {
      this.props.markComplete(todo.id);
    }
  };

  private deleteTodo = (todo: ITodo) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const shouldDelete = confirm('Are you sure you want to delete this Todo?');
    if (shouldDelete) {
      this.props.deleteTodo(todo.id);
    }
  };
}

const mapStateToProps = (state: IStoreState) => ({
  authenticatedUser: state.authenticatedUser,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
  markComplete: bindActionCreators(markTodoCompleteAction, dispatch),
  markInComplete: bindActionCreators(markTodoInCompleteAction, dispatch),
});

export default withRouter(
  connect<{}, {}, ITodosPageProps>(mapStateToProps, mapDispatchToProps)(
    TodosPage
  )
);
