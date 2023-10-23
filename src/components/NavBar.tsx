import { When } from 'react-if';
import { Link } from 'react-router-dom';

import { useUserContext } from '../context/UserContext';
import Logo from '../smartplan-logo/logo-transparent-bg.png';

export default function NavBar():JSX.Element {
  const { state } = useUserContext();

  return (
    <nav className='navbar navbar-expand navbar-light bg-light '>
      <div className='navbar-brand'>
        <img
          src={Logo}
          width='70'
          height='70'
        />
      </div>
      <When condition={!!state}>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className=' nav-link' to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className=' nav-link' to='/search'>
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link className=' nav-link ' to='/new'>
                Add Receipt
              </Link>
            </li>
          </ul>
        </div>
      </When>
    </nav>
  );
}
