import { Flex, Text } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/switch';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { initialState } from '../../store/reducers/main';
import { NavigationItem } from './NavigationItem';

const navItems = [
  {
    displayName: ['Calculator', 'Калкулатор'],
    href: '/calculator',
  },
  {
    displayName: ['About', 'За Нас'],
    href: '/about',
  },
];

export const NavigationItems: React.FC<{}> = ({}) => {
  const language = useSelector(
    (state) => (state as typeof initialState).language
  );

  return (
    <Nav className='mr-auto'>
      {navItems.map((item) => (
        <NavigationItem
          // onClick={() => history.push(item.href)}
          href={item.href}
          key={item.displayName[language]}
        >
          {item.displayName[language]}
        </NavigationItem>
      ))}
    </Nav>
  );
};

type NavAccProps = {
  onSwitch: (...args: any) => any;
};

const results = ['Results', 'Резултати'];
export const NavigationItemsAccount: React.FC<NavAccProps> = ({ onSwitch }) => {
  const language = useSelector(
    (state) => (state as typeof initialState).language
  );

  return (
    <Nav>
      <Flex h='100' mr={3} justify='center' align='center'>
        <Switch m='auto' mr={2} onChange={onSwitch} />
        <Text color='gray.500'>{language === 0 ? 'EN' : 'MK'}</Text>
      </Flex>
      <NavigationItem href='/me'>{results[language]}</NavigationItem>
    </Nav>
  );
};
