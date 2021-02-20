import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink className='navbar-brand' to='/'>
      Fruit Calculator
    </NavLink>
  );
};
