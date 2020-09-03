import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__item'>
        <div>Address List</div>
      </Link>
      <Link to='/address/add' className='navbar__item'>
        <div>Add new address</div>
      </Link>
    </nav>
  );
};

export default NavBar;
