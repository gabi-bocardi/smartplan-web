import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { IReceipt, useReceiptsContext } from '../components/context/ReceiptsContext';

type INewReceipt = Omit<IReceipt, '_id'>;

export default function NewReceipt() {
  const { register, handleSubmit } = useForm<INewReceipt>();
  const { receipts, setReceipts } = useReceiptsContext();
  const history = useHistory();

  async function onSubmit(data: INewReceipt): Promise<void> {
    const receipt = await axios.post(
      'http://localhost:3000/api/receipts',
      data,
    );
    setReceipts([...receipts, receipt.data]);
    history.push('/dashboard');
  }

  return (
    <div className='container-sm my-5 m-auto '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='align-items-center p-5'
      >
        <div className='form-group my-2 '>
          <label>Product Name:</label>
          <input
            className='form-control my-2'
            placeholder='E.g.: Couch'
            {...register('product')}
          />
        </div>
        <div className='form-group my-2'>
          <label>Shop: </label>
          <input
            className='form-control my-2'
            placeholder='E.g.: Ikea'
            {...register('shop')}
          />
        </div>
        <div className='form-group my-2'>
          <label>Date of Purchase: </label>
          <input
            className='form-control my-2'
            type='date'
            id='dateOfPurchase'
            required
          />
        </div>
        <div className='form-group my-2'>
          <label>Category: </label>
          <select {...register('category')} className='form-control my-2'>
            <option value=''> --Please choose an option-- </option>
            <option value='Home'> Home </option>
            <option value='Personal'> Personal </option>
            <option value='Work'> Work </option>
            <option value='Education'> Education </option>
            <option value='Vacation'> Vacation </option>
            <option value='Utilities'> Bills/Utilities </option>
            <option value='Other'>Other </option>
          </select>
        </div>
        <div className='form-group my-2'>
          <label>File URL: </label>
          <input className='form-control my-2' {...register('fileUrl')} />
        </div>
        <button type='submit' className='my-2  btn btn-outline-dark'>
          Add Receipt
        </button>
      </form>
    </div>
  );
}
