import { Route, Routes } from 'react-router';

import { PrivateRoute } from 'components/PrivateRoute';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import NewReceipt from 'pages/NewReceipt';
import SearchPage from 'pages/Search/SearchPage';

export default function RouterIndex(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/new' element={<NewReceipt />} />
      </Route>
    </Routes>
  );
}
