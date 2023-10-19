import axios from 'axios';
import { useForm } from 'react-hook-form';

import { IUser } from '../components/context/UserContext';

export default function Login() {
  const { register, handleSubmit } = useForm<IUser>();
  // const history = useHistory();

  async function onSubmit(data: IUser): Promise<void> {
    const user = await axios.post('http://localhost:3000/api/user', data);
    if (user.data) {
      // history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  }
  return (
    <div className='container-sm my-5'>
      <h1 className='text-center'> Login </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label className='form-label'>Username</label>
          <input
            className='form-control'
            placeholder='E.g.: example@example.com'
            {...register('username')}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            className='form-control'
            placeholder='E.g.: Mypassword '
            type='password'
            {...register('password')}
          />
        </div>
        <button type='submit' className='btn btn-outline-success btn-md active'>
          Login
        </button>
      </form>
    </div>
  );
}
