import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { editTodo as editTodoAction } from '../../actions';
import { IEditTodoAction } from '../../actions/ActionTypes';
import { errorPath, todosPath } from '../../routes/paths';
import { IStoreState, ITodo, TodoStatus, UserType } from '../../types';
import Button from '../Button';

export interface IEditPageProps extends RouteComponentProps<any> {
  todo: ITodo | null;
  editTodo: (id: string, title: string, summary: string) => IEditTodoAction;
}

interface IErrors {
  summary: string;
  title: string;
}

export interface IEditPageState {
  readonly title: string;
  readonly summary: string;
  readonly errors: IErrors;
  readonly shouldRedirect: boolean;
}

class EditPage extends React.Component<IEditPageProps, IEditPageState> {
  constructor(props: IEditPageProps) {
    super(props);
    const { todo } = props;
    this.state = {
      errors: {
        summary: '',
        title: '',
      },
      shouldRedirect: !todo,
      summary: !todo ? '' : todo.summary,
      title: !todo ? '' : todo.title,
    };
  }

  public render() {
    const { todo } = this.props;
    const { shouldRedirect } = this.state;
    const id = !!todo ? todo.id : '';
    return (
      <form className="primary" noValidate={true}>
        {shouldRedirect ? <Redirect to={errorPath} /> : null}
        <h2>
          Editing Todo for id <div className="id">{id}</div>
        </h2>
        <label> Title </label>
        <input
          type="text"
          placeholder="What do you want to accomplish?"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <div className="error">{this.state.errors.title}</div>

        <label> Summary </label>
        <textarea
          placeholder="How do you intend to accomplish that?"
          name="summary"
          id="summary"
          value={this.state.summary}
          onChange={this.handleSummaryChange}
        />
        <div className="error">{this.state.errors.summary}</div>

        <div className="buttons">
          <Button onClick={this.goBack}> Back </Button>
          <Button onClick={this.save}> Save </Button>
        </div>
      </form>
    );
  }

  private handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    this.setState({
      errors: {
        ...this.state.errors,
        title: title.length > 0 ? '' : this.state.errors.title,
      },
      title,
    });
  };

  private handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const summary = e.target.value;
    this.setState({
      errors: {
        ...this.state.errors,
        summary: summary.length > 0 ? '' : this.state.errors.summary,
      },
      summary,
    });
  };

  private goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  private save = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { title, summary } = this.state;
    const errors = {
      summary: '',
      title: '',
    };
    e.preventDefault();

    if (!title) {
      errors.title = 'Title cannot be empty!';
    }
    if (!summary) {
      errors.summary = 'Summary cannot be empty!';
    }
    if (title && summary) {
      this.props.editTodo(this.props.todo.id, title, summary);
      this.props.history.push(todosPath);
    }
    this.setState({ errors });
  };
}

const mapStateToProps = (
  state: IStoreState,
  ownProps: RouteComponentProps<any>
) => {
  let todo: ITodo | null = null;
  const todoId: string = ownProps.match.params.todoId;
  todo = state.todos.find(item => item.id === todoId);
  return { todo };
};

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  editTodo: bindActionCreators(editTodoAction, dispatch),
});

export default withRouter(
  connect<{}, {}, IEditPageProps>(mapStateToProps, mapDispatchToProps)(EditPage)
);
