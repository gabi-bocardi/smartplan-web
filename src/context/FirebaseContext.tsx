import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import {
  ReactNode, createContext, useContext, useMemo,
} from 'react';

interface IFirebaseContext {
  auth?: Auth;
}

const initialState: IFirebaseContext = {
  auth: undefined,
};

const FirebaseContext = createContext<IFirebaseContext>(initialState);

export function useFirebaseContext(): IFirebaseContext {
  return useContext(FirebaseContext);
}

export function FirebaseContextProvider({ children }: { children: ReactNode }): JSX.Element {
  const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  });
  const auth = useMemo(() => getAuth(app), [app]);
  const context = useMemo(() => ({ app, auth }), [app, auth]);

  return (
    <FirebaseContext.Provider value={context}>
      {children}
    </FirebaseContext.Provider>
  );
}
