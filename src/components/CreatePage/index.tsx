import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { addTodo as addTodoAction } from '../../actions';
import { IAddTodoAction } from '../../actions/ActionTypes';
import { todosPath } from '../../routes/paths';
import { IStoreState, ITodo, TodoStatus, UserType } from '../../types';
import Button from '../Button';

const v4 = require('uuid/v4'); // tslint:disable-line no-var-requires

export interface ICreatePageProps extends RouteComponentProps<any> {
  addTodo: (todo: ITodo) => IAddTodoAction;
}

interface IErrors {
  summary: string;
  title: string;
}

export interface ICreatePageState {
  readonly title: string;
  readonly summary: string;
  readonly errors: IErrors;
}

class CreatePage extends React.Component<ICreatePageProps, ICreatePageState> {
  constructor(props: ICreatePageProps) {
    super(props);
    this.state = {
      errors: {
        summary: '',
        title: '',
      },
      summary: '',
      title: '',
    };
  }

  public render() {
    return (
      <form className="primary" noValidate={true}>
        <h2>Add a new Todo</h2>
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
          <Button onClick={this.create}> Create </Button>
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

  private create = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      this.props.addTodo({
        id: v4(),
        status: TodoStatus.Incomplete,
        summary,
        title,
      });
      this.props.history.push(todosPath);
    }
    this.setState({ errors });
  };
}

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  addTodo: bindActionCreators(addTodoAction, dispatch),
});

export default withRouter(
  connect<{}, {}, ICreatePageProps>(null, mapDispatchToProps)(CreatePage)
);
