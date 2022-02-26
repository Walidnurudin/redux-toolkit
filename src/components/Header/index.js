import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <div className='header__wrapper'>
      <Link to='/' className='header__link'>
        Home
      </Link>
      <Link to='/detail' className='header__link'>
        Detail
      </Link>
    </div>
  );
}

export default Header;
