import { ChakraBaseProvider } from '@chakra-ui/react';
import { useMemo, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { UserContext, UserReducer, initialState } from './context/UserContext';
import RouterIndex from 'RouterIndex';
import theme from 'style/theme';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const userContext = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <BrowserRouter>
      <ChakraBaseProvider theme={theme}>
        <UserContext.Provider value={userContext}>
          <NavBar />
          <RouterIndex />
          <Footer />
        </UserContext.Provider>
      </ChakraBaseProvider>
    </BrowserRouter>
  );
}

export default App;
