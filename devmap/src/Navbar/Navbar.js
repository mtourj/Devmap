import React from 'react';
import LogoSmall from '../img/devmapLogoSmall.png';
import './Navbar.scss';

const Navbar = props => {
  return (
    <div className='navbar'>
      <img src={LogoSmall} alt='Devmap' />
      <button>&#9776;</button>
    </div>
  );
}

export default Navbar;