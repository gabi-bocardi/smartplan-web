import { ChakraProvider } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useMemo, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  UserContext, UserReducer, initialState,
} from './context/UserContext';
import { FirebaseContext } from 'context/FirebaseContext';
import { PageWrapper } from 'pages/PageWrapper';
import RouterIndex from 'RouterIndex';
import theme from 'style/theme';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const userContext = useMemo(() => ({ state, dispatch, isAuthenticated: false }), [dispatch, state]);

  const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  });
  const auth = useMemo(() => getAuth(app), [app]);
  const firebaseContext = useMemo(() => ({ app, auth }), [app, auth]);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <FirebaseContext.Provider value={firebaseContext}>
          <UserContext.Provider value={userContext}>
            <PageWrapper>
              <RouterIndex />
            </PageWrapper>
          </UserContext.Provider>
        </FirebaseContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
