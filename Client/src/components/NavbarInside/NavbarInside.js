import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

import NavHead from '../pages/Shared/NavHead';

function NavbarInside() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const [selected, setSelected] = useState('home');
  const [selectedMedia, setSelectedMedia] = useState('home'); 
  
  return (
    <>
    
      <NavHead></NavHead>
      <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
            E-BOARD
            <i className='fab fa-typo3' />
            
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' title="Home" selected={selected === 'home'} onClick={() => setSelected('home') && closeMobileMenu}>
                Home
              </Link>
            </li>
           
          
      </ul>
      </nav>
      
    </>
  );
}

export default NavbarInside;