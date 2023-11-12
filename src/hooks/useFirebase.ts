import { FirebaseError } from 'firebase/app';
import {
  UserCredential, createUserWithEmailAndPassword,
} from 'firebase/auth';
import { startsWith } from 'lodash';

import { useFirebaseContext } from 'context/FirebaseContext';

interface IFirebase {
  createUser: (email: string, password: string) => Promise<UserCredential>;
}

export function useAuth(): IFirebase {
  const { auth } = useFirebaseContext();

  async function createUser(email: string, password: string): Promise<UserCredential> {
    if (!auth) {
      throw new Error('Firebase auth is not initialized');
    }

    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (isFirebaseError(e)) {
        throw new Error(formatFirebaseErrorCode((e as FirebaseError).code));
      }
      throw e;
    }
  }

  return {
    createUser,
  };
}

function isFirebaseError(error: unknown): boolean {
  return (error as FirebaseError).code !== undefined;
}

function formatFirebaseErrorCode(errorCode: string): string {
  return startsWith(errorCode, 'auth/') ? errorCode.slice(5) : errorCode;
}
