import { FormLabel, Input } from '@chakra-ui/react';
import { startCase } from 'lodash';
import { FieldErrorsImpl } from 'react-hook-form';

import FormError from './FormError';
import { FormGroup as Group } from 'components/FormGroup';

export default function FormGroup({
  name, inputProps, errors, label, type = 'text',
}: { name: string, inputProps: any, errors: Partial<FieldErrorsImpl<any>>, label?: string, type?: string }): JSX.Element {
  return (
    <Group>
      <FormLabel> {label || startCase(name)}: </FormLabel>
      <Input {...inputProps} type={type} />
      <FormError errors={errors} name={name} />
    </Group>
  );
}
