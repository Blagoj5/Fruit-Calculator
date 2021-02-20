import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  children: JSX.Element | string;
  href: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  href,
}) => {
  return (
    <Link to={href} className='nav-link'>
      {children}
    </Link>
  );
};
