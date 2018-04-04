import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes, {
  ISignInAction,
  ISignOutAction,
} from '../actions/ActionTypes';
import { UserType } from '../types';
import initialState from './initialState';

const onSignIn = (action: ISignInAction): UserType => {
  return action.payload.authenticatedUser;
};

const onSignOut = (): null => {
  return null;
};

export default function authenticationReducer(
  state: UserType | null = initialState.authenticatedUser,
  action: ActionTypes
) {
  switch (action.type) {
    case ActionTypeKeys.LOGIN:
      return onSignIn(action);
    case ActionTypeKeys.LOGOUT:
      return onSignOut();
    default:
      return state;
  }
}
