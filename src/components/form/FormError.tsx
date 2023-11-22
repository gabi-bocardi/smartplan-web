import { Flex, Icon, Text } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl } from 'react-hook-form';
import { IoIosCloseCircle } from 'react-icons/io';

export default function FormError({ errors, name }: { errors: Partial<FieldErrorsImpl<any>>, name: string }): JSX.Element {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Flex alignItems='center' gap='8px'>
          <Icon as={IoIosCloseCircle} boxSize='25px' color='red.600' />
          <Text color='red.600' fontSize='14px'>{message}</Text>
        </Flex>
      )}
    />
  );
}
