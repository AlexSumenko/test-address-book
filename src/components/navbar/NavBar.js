import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__item'>
        <div>Test</div>
      </Link>
      <Link to='/' className='navbar__item'>
        <div>Test</div>
      </Link>
    </nav>
  );
};

export default NavBar;
