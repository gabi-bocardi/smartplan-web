import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  ReactNode,
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

import { useFirebaseContext } from './FirebaseContext';
import { formatFirebaseErrorCode, isFirebaseError } from 'helpers/auth';

export interface IUser {
  username: string;
  password: string;
}

export interface IUserContext {
  state?: IUser;
  isAuthenticated: boolean;
  createUser: (username: string, password: string) => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
  state: undefined,
  isAuthenticated: false,
  createUser: () => Promise.resolve(),
});

export function useUserContext(): IUserContext {
  return useContext(UserContext);
}

export const initialState: IUser = {
  username: '',
  password: '',
};

export function UserContextProvider({ children }: { children: ReactNode }): JSX.Element {
  const { auth } = useFirebaseContext();
  const [state, setState] = useState<IUser>(initialState);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const createUser = useCallback(async (email: string, password: string): Promise<void> => {
    if (!auth) {
      throw new Error('Firebase auth is not initialized');
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (isFirebaseError(e)) {
        throw new Error(formatFirebaseErrorCode((e as FirebaseError).code));
      }
      throw e;
    }
  }, [auth]);

  const context = useMemo(() => ({
    state,
    isAuthenticated,
    createUser,
  }), [createUser, isAuthenticated, state]);

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  );
}
