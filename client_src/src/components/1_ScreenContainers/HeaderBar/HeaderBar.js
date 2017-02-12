// CORE
import React from 'react';
// SCSS
import './HeaderBar.scss';

const HeaderBar = (props) => {

    const { children } = props;

    return (
      <header className='HeaderBar'>
          {children}
      </header>
    );
};

export default HeaderBar;
