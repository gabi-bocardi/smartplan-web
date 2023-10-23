import {
  Button, Center, Flex, FormLabel, Heading, Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { FormGroup } from 'components/FormGroup';
import { IUser } from 'types';

type RegistrationForm = IUser & { Password: string, ConfirmPassword: string };

export function Registration(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<RegistrationForm>();
  const { isValid } = formState;
  async function onSubmit(data: RegistrationForm): Promise<void> {
    console.log(data);
    // post user data to backend
  }

  return (
    <Flex direction='column' maxW='800px' mx='auto'>
      <Heading>Registration</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column' gap='10px'>
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <Input placeholder='First Name' {...register('FirstName')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name</FormLabel>
            <Input {...register('LastName')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <Input {...register('Email')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <Input {...register('Password')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <Input {...register('ConfirmPassword')} />
          </FormGroup>
          <Button type='submit'>Register</Button>
        </Flex>
      </form>
    </Flex>
  );
}
