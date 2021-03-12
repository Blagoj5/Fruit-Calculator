import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Logo } from '../components/Logo';
import {
  NavigationItems,
  NavigationItemsAccount,
} from '../components/Navigation/NavigationItems';
import { changeLanguage } from '../store/actions/main';
import { initialState } from '../store/reducers/main';
import { DispatchFunction } from '../types/redux';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch<DispatchFunction<typeof initialState>>();
  const language = useRef<0 | 1>(0);

  const toggleLanguageHandler = () => {
    console.log('i was toggled');
    language.current = language.current === 0 ? 1 : 0;

    dispatch(changeLanguage(language.current));
  };

  useEffect(() => {
    dispatch({
      type: 'INITIAL_LOAD',
    });
  }, []);
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Logo />
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <NavigationItems />
          <NavigationItemsAccount onSwitch={toggleLanguageHandler} />
        </Navbar.Collapse>
      </Navbar>
      <Box
        as='main'
        minH='95vh'
        backgroundImage='url("https://eskipaper.com/images/kids-wallpaper-4.jpg")'
        pt='80px'
      >
        {children}
      </Box>
    </>
  );
};
