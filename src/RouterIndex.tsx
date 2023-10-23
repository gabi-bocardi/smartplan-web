import { Route, Routes } from 'react-router';

import { PrivateRoute } from 'components/PrivateRoute';
import Dashboard from 'pages/Dashboard';
import ErrorPage from 'pages/ErrorPage';
import Login from 'pages/Login';
import NewReceipt from 'pages/NewReceipt';
import { Registration } from 'pages/Registration';
import SearchPage from 'pages/Search/SearchPage';

export default function RouterIndex(): JSX.Element {
  return (
    <Routes>
      <Route path='/*' element={<ErrorPage />} />
      <Route path='/' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/new' element={<NewReceipt />} />
      </Route>
    </Routes>
  );
}
