import { extendBaseTheme } from '@chakra-ui/react';

const theme = extendBaseTheme({
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'blue.500',
      },
    },
  },
});

export default theme;
