import { createContext, useContext } from "react";

export interface IUser {
  username: string;
  password: string;
}
interface IUserContext {
  user?: IUser;
  setUser(user: IUser): void;
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

export function useUserContext(): IUserContext {
  return useContext(UserContext);
}
