import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '../context/UserContext';

export function PrivateRoute(): JSX.Element {
  const { state } = useUserContext();

  if (!state?.username) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
}
