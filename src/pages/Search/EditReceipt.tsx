import axios from 'axios';
import { useForm } from 'react-hook-form';

import { IReceipt, useReceiptsContext } from '../../components/context/ReceiptsContext';

type IReceiptForm = Omit<IReceipt, '_id' | 'product'>;

export default function EditRecord({
  receipt,
  onClose,
}: {
  receipt: IReceipt;
  onClose: () => void;
}): JSX.Element {
  const { setReceipts, receipts } = useReceiptsContext();
  const { register, handleSubmit } = useForm<IReceiptForm>({
    defaultValues: {
      ...receipt,
      dateOfPurchase: new Date(receipt.dateOfPurchase)
        .toISOString()
        .split('T')[0],
    },
  });

  async function onSubmit(data: IReceiptForm): Promise<void> {
    const response = await axios.put<IReceipt>(
      `http://localhost:3000/api/receipts/${receipt._id}`,
      {
        ...data,
        dateOfPurchase: new Date(data.dateOfPurchase).toISOString(),
      },
    );
    setReceipts([
      response.data,
      ...receipts.filter((receipt) => receipt._id !== response.data._id),
    ]);
    onClose();
  }

  return (
    <div
      className='modal show fade'
      style={{ display: 'block' }}
      role='dialog'
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='false'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Edit Receipt
            </h5>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='modal-body'>
              <div className='form-group my-2'>
                <label>Shop: </label>
                <input
                  className='form-control my-2'
                  {...register('shop')}
                  placeholder='E.g.: Ikea'
                />
              </div>
              <div className='form-group my-2'>
                <label>Date of Purchase: </label>
                <input
                  className='form-control my-2'
                  type='date'
                  {...register('dateOfPurchase')}
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
                <label>File Path: </label>
                <input className='form-control my-2' {...register('fileUrl')} />
              </div>
            </div>

            <div className='modal-footer'>
              <button className='btn btn-secondary' onClick={() => onClose()}>
                Close
              </button>
              <button type='submit' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
