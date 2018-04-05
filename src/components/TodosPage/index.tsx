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
import { IStoreState, ITodo, UserType } from '../../types';
import Button from '../Button';
import Todo from '../Todo';

export interface ITodosPageProps extends RouteComponentProps<any> {
  readonly authenticatedUser: UserType;
  readonly todos: ITodo[];
  deleteTodo: (id: string) => IDeleteTodoAction;
  markTodoComplete: (id: string) => IMarkTodoCompleteAction;
  markTodoInComplete: (id: string) => IMarkTodoInCompleteAction;
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
            />
          ))}
        </div>
      </div>
    );
  }
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
