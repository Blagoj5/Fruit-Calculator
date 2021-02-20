import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavigationItem } from './NavigationItem';

const navItems = [
  {
    displayName: 'Calculator',
    href: '/calculator',
  },
  {
    displayName: 'About',
    href: '/about',
  },
];

interface NavigationItemsProps {}

export const NavigationItems: React.FC<NavigationItemsProps> = ({}) => {
  return (
    <Nav className='mr-auto'>
      {navItems.map((item) => (
        <NavigationItem
          // onClick={() => history.push(item.href)}
          href={item.href}
          key={item.displayName}
        >
          {item.displayName}
        </NavigationItem>
      ))}
    </Nav>
  );
};

export const NavigationItemsAccount: React.FC = () => {
  return (
    <Nav>
      <NavigationItem
        // onClick={() => history.push(item.href)}
        href='/me'
      >
        Results
      </NavigationItem>
    </Nav>
  );
};
