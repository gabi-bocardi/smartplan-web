import { FirebaseError } from 'firebase/app';
import { startsWith } from 'lodash';

export function isFirebaseError(error: unknown): boolean {
  return (error as FirebaseError).code !== undefined;
}

export function formatFirebaseErrorCode(errorCode: string): string {
  return startsWith(errorCode, 'auth/') ? errorCode.slice(5) : errorCode;
}
