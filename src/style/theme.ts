import { extendTheme } from '@chakra-ui/react';

import { buttonTheme } from './button';
import { inputTheme } from './input';

const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    FormLabel: {
      baseStyle: {
        margin: 0,
      },
    },
    Text: {
      baseStyle: {
        texStyle: 'p',
      },
    },
  },
  colors: {
    brand: {
      primary: '#386641',
      secondary: '#6A994E',
      light: '#F2E8CF',
    },
  },
  textStyles: {
    h1: {
      fontSize: '48px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '24px',
      fontWeight: 700,
    },
    p: {
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  fonts: {
    heading: 'Sunflower',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        color: 'black',
      },
    },
  },
});

export default theme;
