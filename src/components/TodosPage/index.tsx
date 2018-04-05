import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import {
  changeFilter as changeFilterAction,
  deleteTodo as deleteTodoAction,
  markTodoComplete as markTodoCompleteAction,
  markTodoInComplete as markTodoInCompleteAction,
} from '../../actions';
import {
  IChangeFilterAction,
  IDeleteTodoAction,
  IMarkTodoCompleteAction,
  IMarkTodoInCompleteAction,
} from '../../actions/ActionTypes';
import visibilityFilterReducer from '../../reducers/visibilityFilterReducer';
import { createPath, editPath, todosPath } from '../../routes/paths';
import { IStoreState, ITodo, TodoStatus, UserType } from '../../types';
import Button from '../Button';
import Todo from '../Todo';

export interface ITodosPageProps extends RouteComponentProps<any> {
  readonly authenticatedUser: UserType;
  readonly todos: ITodo[];
  readonly visibilityFilter: TodoStatus | null;
  deleteTodo: (id: string) => IDeleteTodoAction;
  markComplete: (id: string) => IMarkTodoCompleteAction;
  markInComplete: (id: string) => IMarkTodoInCompleteAction;
  changeFilter: (visibilityFilter: TodoStatus | null) => IChangeFilterAction;
}

class TodosPage extends React.Component<ITodosPageProps> {
  public render() {
    const { authenticatedUser, todos, visibilityFilter } = this.props;
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
        <div className="filters">
          <a
            href="#"
            onClick={this.changeFilter(null)}
            className={`action ${visibilityFilter === null ? 'active' : ''}`}
          >
            All
          </a>
          <a
            href="#"
            onClick={this.changeFilter(TodoStatus.Incomplete)}
            className={`action ${
              visibilityFilter === TodoStatus.Incomplete ? 'active' : ''
            }`}
          >
            Incomplete
          </a>
          <a
            href="#"
            onClick={this.changeFilter(TodoStatus.Completed)}
            className={`action ${
              visibilityFilter === TodoStatus.Completed ? 'active' : ''
            }`}
          >
            Completed
          </a>
        </div>
        <div className="todos">
          {todos.map((todo: ITodo) => (
            <Todo
              authenticatedUser={authenticatedUser}
              todo={todo}
              key={todo.id}
              onStatusClick={this.toggleTodo(todo)}
              onDeleteClick={this.deleteTodo(todo)}
              onEditClick={this.editTodo(todo)}
            />
          ))}
          {todos.length === 0 ? (
            <div className="error">
              No todos found! Please change filter criteria or add new todo.
            </div>
          ) : null}
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

  private editTodo = (todo: ITodo) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    this.props.history.push(`${editPath}/${todo.id}`);
  };

  private changeFilter = (visibilityFilter: TodoStatus | null) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    this.props.changeFilter(visibilityFilter);
  };
}

const mapStateToProps = (state: IStoreState) => ({
  authenticatedUser: state.authenticatedUser,
  todos: state.visibilityFilter
    ? state.todos.filter(todo => todo.status === state.visibilityFilter)
    : state.todos,
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  changeFilter: bindActionCreators(changeFilterAction, dispatch),
  deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
  markComplete: bindActionCreators(markTodoCompleteAction, dispatch),
  markInComplete: bindActionCreators(markTodoInCompleteAction, dispatch),
});

export default withRouter(
  connect<{}, {}, ITodosPageProps>(mapStateToProps, mapDispatchToProps)(
    TodosPage
  )
);
