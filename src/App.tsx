import { ChakraBaseProvider } from '@chakra-ui/react';
import useAxios from 'axios-hooks';
import {
  useEffect, useMemo, useReducer, useState,
} from 'react';
import { If, Then } from 'react-if';
import { Route, Switch } from 'react-router-dom';

import { IReceipt, ReceiptsContext } from './components/context/ReceiptsContext';
import { UserContext, UserReducer, initialState } from './components/context/UserContext';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { PrivateRoute } from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NewReceipt from './pages/NewReceipt';
import SearchPage from './pages/Search/SearchPage';
import loadingSpinner from './smartplan-logo/loading-spinner.svg';
import theme from 'style/theme';

function App() {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const [response] = useAxios<IReceipt[]>('http://localhost:3000/api/receipts');

  const userContext = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ChakraBaseProvider theme={theme}>
      <UserContext.Provider value={userContext}>
        <If condition={!response}>
          <Then>
            <img src={loadingSpinner} />
          </Then>
        </If>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/search' component={SearchPage} />
          <PrivateRoute exact path='/new' component={NewReceipt} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </ChakraBaseProvider>
  );
}

export default App;
