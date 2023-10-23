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
  },
  colors: {
    brand: {
      primary: '#386641',
      secondary: '#6A994E',
      light: '#F2E8CF',
    },
  },
});

export default theme;
