import { ChakraProvider } from '@chakra-ui/react';
import { useMemo, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserContext, UserReducer, initialState } from './context/UserContext';
import { PageWrapper } from 'pages/PageWrapper';
import RouterIndex from 'RouterIndex';
import theme from 'style/theme';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const userContext = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <UserContext.Provider value={userContext}>
          <PageWrapper>
            <RouterIndex />
          </PageWrapper>
        </UserContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
