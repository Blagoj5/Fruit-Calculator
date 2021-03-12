import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMyStore } from '../hooks/useMyStore';

const logo = ['Fruit Calculator', 'Овошен Калкулатор'];

export const Logo = () => {
  const { language } = useMyStore();
  return (
    <NavLink className='navbar-brand' to='/'>
      {logo[language]}
    </NavLink>
  );
};
