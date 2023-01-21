import { Redirect, Route, RouteProps } from "react-router-dom";
import { useUserContext } from "./UserContext";

export function PrivateRoute(props: RouteProps): JSX.Element {
  const { user } = useUserContext();

  if (!user) {
    return <Redirect exact to="/" />;
  }

  return <Route {...props} />;
}
