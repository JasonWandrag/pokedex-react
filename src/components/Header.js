import React from 'react';
import Search from './Search';

const Header = props => {
  return (
    <div className='header'>
      <img
        src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG'
        className='headerLogo'
        alt='Pokeball'
      />
      <h1 className='pageTitle'>{props.branding}</h1>
      <img
        src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG'
        className='headerLogo'
        alt='Pokeball'
      />
      <Search />
    </div>
  );
};

export default Header;
