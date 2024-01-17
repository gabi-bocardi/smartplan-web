import { Flex, FormLabel, Input } from '@chakra-ui/react';
import { startCase } from 'lodash';
import { FieldErrorsImpl } from 'react-hook-form';

import FormError from './FormError';

export default function FormGroup({
  name, inputProps, errors, label, type = 'text',
}: { name: string, inputProps: any, errors: Partial<FieldErrorsImpl<any>>, label?: string, type?: string }): JSX.Element {
  return (
    <Flex direction='column' gap='5px'>
      <FormLabel> {label || startCase(name)}: </FormLabel>
      <Input {...inputProps} type={type} />
      <FormError errors={errors} name={name} />
    </Flex>
  );
}
