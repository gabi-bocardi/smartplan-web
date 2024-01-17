import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const solid = defineStyle(() => ({
  bg: 'brand.primary',
  color: 'white',
  _hover: {
    bg: 'brand.secondary',
  },
}));

export const buttonTheme = defineStyleConfig({
  defaultProps: {
    variant: 'solid',
  },
  variants: { solid },
});
