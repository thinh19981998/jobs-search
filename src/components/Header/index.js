import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Header({ goBackToHome }) {
  const logoClicked = () => {
    goBackToHome();
  };

  return (
    <Link to='/' className='header-link'>
      <header>
        <h1 className='heading' onClick={logoClicked}>
          <span className='heading--main'>Github</span> Jobs
        </h1>
      </header>
    </Link>
  );
}

export default Header;
