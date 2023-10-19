import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import SearchResult from './SearchResult';

interface ISearchForm {
  search?: string;
}

export default function SearchPage() {
  const { receipts } = useReceiptsContext();
  const { register, watch } = useForm<ISearchForm>();
  const search = watch('search');

  const receiptElements = useMemo(() => {
    const receiptsData = search
      ? receipts.filter((receipt) => receipt.product.includes(search))
      : receipts;
    return receiptsData
      .sort(
        (a, b) => new Date(b.dateOfPurchase).getTime()
          - new Date(a.dateOfPurchase).getTime(),
      )
      .map((receipt) => <SearchResult key={receipt._id} receipt={receipt} />);
  }, [receipts, search]);

  return (
    <div className='container-sm my-5 m-auto d-flex flex-column'>
      <input className='form-control mr-sm-2 ' {...register('search')} />
      <h2 className='py-3'>
        Category: <span> All </span>
      </h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Product</th>
            <th scope='col'> Shop</th>
            <th scope='col'> Date</th>
            <th scope='col'> Edit</th>
            <th scope='col'> Delete</th>
          </tr>
        </thead>
        <tbody>{receiptElements}</tbody>
      </table>
    </div>
  );
}
