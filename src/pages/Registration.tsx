import {
  Button, ButtonGroup, Flex, Heading,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import FormGroup from 'components/form/FormGroup';
import { useAuth } from 'hooks/useFirebase';
import { IUser } from 'types';

type RegistrationForm = Omit<IUser, 'Id' | 'CreatedAt' | 'AuthToken' > & { Password: string, ConfirmPassword: string };

const VALIDATION_SCHEMA = yup.object().shape({
  FirstName: yup.string().required('First Name is required.'),
  LastName: yup.string().required('Last Name is required.'),
  Email: yup.string().email('Email must be a valid email address.').required('Email is required.'),
  Password: yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters.'),
  ConfirmPassword: yup.string().required('Confirm Password is required.').oneOf([yup.ref('Password')], 'Passwords must match.'),
}).required();

export function Registration(): JSX.Element {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

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
          <FormGroup
            name='FirstName'
            inputProps={{ ...register('FirstName') }}
            errors={errors}
          />
          <FormGroup
            name='LastName'
            inputProps={{ ...register('LastName') }}
            errors={errors}
          />
          <FormGroup
            name='Email'
            inputProps={{ ...register('Email') }}
            errors={errors}
          />
          <FormGroup
            name='Password'
            inputProps={{ ...register('Password') }}
            errors={errors}
            type='password'
          />
          <FormGroup
            name='ConfirmPassword'
            inputProps={{ ...register('ConfirmPassword') }}
            errors={errors}
            type='password'
          />
          <ButtonGroup as={Flex} justifyContent='center'>
            <Button type='submit' width='150px'>🚀 Register</Button>
            <Button variant='outline' width='150px' onClick={() => navigate('/login')}>Cancel</Button>
          </ButtonGroup>
        </Flex>
      </form>
    </Flex>
  );
}
