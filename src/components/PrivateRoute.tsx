import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useUserContext } from './context/UserContext';

export function PrivateRoute(props: RouteProps): JSX.Element {
  const { state } = useUserContext();

  if (!state) {
    return <Redirect exact to='/' />;
  }

  return <Route {...props} />;
}
