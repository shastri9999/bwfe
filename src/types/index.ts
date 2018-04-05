export enum UserType {
  Employee = 'Employee',
  Manager = 'Manager',
}

export enum TodoStatus {
  Completed = 'Completed',
  Incomplete = 'Incomplete',
}

export interface ITodo {
  id: string;
  title: string;
  summary: string;
  status: TodoStatus;
}

export interface IStoreState {
  readonly authenticatedUser: UserType | null;
  readonly todos: ReadonlyArray<ITodo>;
  readonly visibilityFilter: TodoStatus | null;
}
