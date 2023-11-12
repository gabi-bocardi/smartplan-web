import { Dispatch, createContext, useContext } from 'react';

export interface IUser {
  username: string;
  password: string;
}

export interface IUserContext {
  state?: IUser;
  dispatch: Dispatch<IUserReducerAction>;
  isAuthenticated: boolean;
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
  dispatch: () => { },
  isAuthenticated: false,
});

export function useUserContext(): IUserContext {
  return useContext(UserContext);
}

export const initialState: IUser = {
  username: '',
  password: '',
};
