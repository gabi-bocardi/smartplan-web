import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import {
  UserContextProvider
} from './context/UserContext';
import { FirebaseContextProvider } from 'context/FirebaseContext';
import { PageWrapper } from 'pages/PageWrapper';
import RouterIndex from 'RouterIndex';
import theme from 'style/theme';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <FirebaseContextProvider>
          <UserContextProvider>
            <PageWrapper>
              <RouterIndex />
            </PageWrapper>
          </UserContextProvider>
        </FirebaseContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
