import app from 'firebase/app';
import { Auth } from 'firebase/auth';
import { createContext, useContext } from 'react';

interface IFirebaseContext {
  app?: app.FirebaseApp;
  auth?: Auth;
}

const initialState: IFirebaseContext = {
  app: undefined,
  auth: undefined,
};

export const FirebaseContext = createContext<IFirebaseContext>(initialState);

export function useFirebaseContext(): IFirebaseContext {
  return useContext(FirebaseContext);
}
