import { Dispatch, createContext, useContext } from 'react';

export interface IUser {
  username: string;
  password: string;
}
interface IUserContext {
  state?: IUser;
  dispatch: Dispatch<IUserReducerAction>;
}

interface IUserReducerAction {
  type: 'login' | 'logout',
  payload: Record<string, unknown>,
}

export function UserReducer(state: IUser, action: IUserReducerAction): IUser {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        ...action.payload,
      };
    case 'logout':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const UserContext = createContext<IUserContext>({
  state: undefined,
  dispatch: () => {},
});

export function useUserContext(): IUserContext {
  return useContext(UserContext);
}

export const initialState: IUser = {
  username: '',
  password: '',
};
