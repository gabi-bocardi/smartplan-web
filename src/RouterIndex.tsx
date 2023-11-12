import { Else, If, Then } from 'react-if';
import { Navigate, Route, Routes } from 'react-router';

import { PrivateRoute } from 'components/PrivateRoute';
import { useUserContext } from 'context/UserContext';
import Dashboard from 'pages/Dashboard';
import ErrorPage from 'pages/ErrorPage';
import Login from 'pages/Login';
import NewReceipt from 'pages/NewReceipt';
import { Registration } from 'pages/Registration';
import SearchPage from 'pages/Search/SearchPage';

export default function RouterIndex(): JSX.Element {
  const { isAuthenticated } = useUserContext();

  return (
    <Routes>
      <Route path='/*' element={<ErrorPage />} />
      {/* user will navigate to different routes depending on wether they are authenticated or not */}
      <Route
        path='/'
        element={(
          <If condition={isAuthenticated}>
            <Then>
              <Navigate to='/dashboard' />
            </Then>
            <Else>
              <Navigate to='/login' />
            </Else>
          </If>
      )}
      />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/new' element={<NewReceipt />} />
      </Route>
    </Routes>
  );
}
