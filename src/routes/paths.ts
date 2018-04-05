import { UserType } from '../types';

export const loginPath = '/login';
export const todosPath = '/todos';
export const createPath = '/create';
export const editPath = '/edit';
export const errorPath = '/error';

export const RouteRestrictions: { [pathName: string]: UserType[] | null } = {
  [loginPath]: null,
  [todosPath]: null,
  [createPath]: [UserType.Manager],
  [editPath]: [UserType.Manager],
};
