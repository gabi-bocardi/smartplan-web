import { ChakraBaseProvider } from '@chakra-ui/react';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import { If, Then } from 'react-if';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { PrivateRoute } from './components/PrivateRoute';
import { IReceipt, ReceiptsContext } from './components/ReceiptsContext';
import { IUser, UserContext } from './components/UserContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NewReceipt from './pages/NewReceipt';
import SearchPage from './pages/Search/SearchPage';
import loadingSpinner from './smartplan-logo/loading-spinner.svg';
import theme from 'style/theme';

function App() {
  const [user, setUser] = useState<IUser>();
  const [receipts, setReceipts] = useState<IReceipt[]>([]);
  const [response] = useAxios<IReceipt[]>('http://localhost:3000/api/receipts');

  useEffect(() => {
    if (response.data) {
      setReceipts(response.data);
    }
  }, [response.data]);

  return (
    <ChakraBaseProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <ReceiptsContext.Provider value={{ receipts, setReceipts }}>
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
        </ReceiptsContext.Provider>
      </UserContext.Provider>
    </ChakraBaseProvider>
  );
}

export default App;
