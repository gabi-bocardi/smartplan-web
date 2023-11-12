import {
  Button, ButtonGroup, Center, Flex, FormErrorMessage, FormLabel, Heading, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormGroup } from 'components/FormGroup';
import { useAuth } from 'hooks/useFirebase';
import { IUser } from 'types';

type RegistrationForm = IUser & { Password: string, ConfirmPassword: string };

export function Registration(): JSX.Element {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const { register, handleSubmit, formState } = useForm<RegistrationForm>();

  async function onSubmit(data: RegistrationForm): Promise<void> {
    const newUser = {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      Password: data.Password,
    };

    await createUser(newUser.Email, newUser.Password);
    await axios.post('/api/user', newUser);

    navigate('/login');
  }

  return (
    <Flex direction='column' maxW='800px' mx='auto' gap='40px'>
      <Heading as='h1' textStyle='h1' alignSelf='center' color='brand.primary'>Registration</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column' gap='10px'>
          <FormGroup>
            <FormLabel>First Name: </FormLabel>
            <Input {...register('FirstName')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name: </FormLabel>
            <Input {...register('LastName')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email: </FormLabel>
            <Input type='email' {...register('Email')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password: </FormLabel>
            <Input type='password' {...register('Password')} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Confirm Password: </FormLabel>
            <Input type='password' {...register('ConfirmPassword')} />
          </FormGroup>
          <ButtonGroup as={Flex} justifyContent='center'>
            <Button type='submit' width='150px'>🚀 Register</Button>
            <Button variant='outline' width='150px' onClick={() => navigate('/login')}>Cancel</Button>
          </ButtonGroup>
        </Flex>
      </form>
    </Flex>
  );
}
