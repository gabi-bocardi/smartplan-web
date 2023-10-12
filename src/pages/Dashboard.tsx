import { AiOutlineHome } from 'react-icons/ai';
import {
  BsBookHalf,
  BsLightbulb,
  BsPeople,
  BsPlusCircle,
} from 'react-icons/bs';
import { FiBriefcase } from 'react-icons/fi';
import { TbBeach } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { useReceiptsContext } from '../components/context/ReceiptsContext';
import { useUserContext } from '../components/context/UserContext';

export default function Dashboard(): JSX.Element {
  const { user } = useUserContext();
  const { receipts } = useReceiptsContext();
  function getReceiptsByCategory(category: string): number {
    return receipts.filter((receipt) => receipt.category === category).length;
  }

  const numHome = getReceiptsByCategory('Home');
  const numWork = getReceiptsByCategory('Work');
  const numPersonal = getReceiptsByCategory('Personal');
  const numEducation = getReceiptsByCategory('Education');
  const numUtilities = getReceiptsByCategory('Utilities');
  const numVacation = getReceiptsByCategory('Vacation');
  const numOther = getReceiptsByCategory('Others');

  const [last, previous, before] = receipts.sort(
    (a, b) => new Date(b.dateOfPurchase).getTime()
      - new Date(a.dateOfPurchase).getTime(),
  );

  return (
    <div className='container-sm my-5'>
      <div
        className=' my-2 d-flex p-5 bg-light align-items-center justify-content-center p-2'
        style={{ width: 'auto', height: '200px' }}
      >
        <Link to='/dashboard'>
          <img
            className='img-fluid rounded-circle'
            alt='Profile Picture'
            src={require('../avatar.jpeg')}
            style={{ width: '170px', height: '170px' }}
          />
        </Link>
        <h1 className='p-5'>Welcome {user?.username}</h1>
      </div>
      <div className='align-items-center w-100 text-center py-2 my-5 '>
        <h3 className='secondary'>
          You have added {receipts.length} receipts{' '}
        </h3>
      </div>
      <div className='categories d-flex p-5 justify-content-around flex-wrap'>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark  flex-column align-items-center'>
          <h5>Home</h5>
          <AiOutlineHome size={75} color='rgb(107,142,35)' />
          <h5 className='text-center text-sm'>{numHome}</h5>
        </div>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark flex-column align-items-center'>
          <h5>Work</h5>
          <FiBriefcase size={75} color='rgb(107,142,35)' />
          <h5 className='text-center'>{numWork}</h5>
        </div>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark flex-column align-items-center'>
          <h5>Personal</h5>
          <BsPeople size={75} color='rgb(107,142,35)' />
          <h5 className='text-center'>{numPersonal}</h5>
        </div>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark flex-column align-items-center'>
          <h5>Education</h5>
          <BsBookHalf size={75} color='rgb(107,142,35)' />
          <h5 className='text-center'>{numEducation}</h5>
        </div>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark flex-column align-items-center'>
          <h5>Utilities</h5>
          <BsLightbulb size={75} color='rgb(107,142,35)' />
          <h5 className='text-center'>{numUtilities}</h5>
        </div>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark flex-column align-items-center'>
          <h5>Vacation</h5>
          <TbBeach size={75} color='rgb(107,142,35)' />
          <h5 className='text-center'>{numVacation}</h5>
        </div>
        <div className='my-1 w-25 h-25 d-flex rounded border-dark flex-column align-items-center'>
          <h5>Others</h5>
          <BsPlusCircle size={75} color='rgb(107,142,35)' />
          <h5 className='text-center'>{numOther}</h5>
        </div>
      </div>
      <div className='history mt-3' />
      <h6>Last 3 Purchases made: </h6>
      <table className='table'>
        <tr>
          <td>{last.product}</td>
          <td>{last.shop}</td>
        </tr>
        <tr>
          <td>{previous.product}</td>
          <td>{previous.shop}</td>
        </tr>
        <tr>
          <td>{before.product}</td>
          <td>{before.shop}</td>
        </tr>
      </table>
    </div>
  );
}
