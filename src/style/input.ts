import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const outline = definePartsStyle(() => ({
  field: {
    _focusVisible: {
      borderColor: 'brand.secondary',
      boxShadow: '0 0 0 1px brand.secondary',
    },
  },
}));

export const inputTheme = defineMultiStyleConfig({
  defaultProps: {
    variant: 'outline',
  },
  variants: { outline },
});
