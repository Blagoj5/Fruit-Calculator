import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Buttons.module.css';

interface PrimaryButtonLink extends ButtonProps {
  children: string;
  href: string;
}

export const PrimaryButtonLink: React.FC<PrimaryButtonLink> = ({
  children,
  href,
  variant,
  ...rest
}) => {
  let buttonStyle: ButtonProps = {
    bg: 'blue.400',
    color: 'white',
    _hover: {
      bg: 'blue.500',
      color: 'white',
    },
  };
  if (variant === 'outline') {
    buttonStyle = {
      variant,
      colorScheme: 'blue',
    };
  }

  return (
    <Button px={0} {...buttonStyle} {...rest}>
      <Link
        to={href}
        style={{
          width: '100%',
          height: '100%',
        }}
        className={variant !== 'outline' ? styles.Link : styles.LinkOutline}
      >
        {children}
      </Link>
    </Button>
  );
};

interface PrimaryButton extends ButtonProps {
  children: string;
}

export const PrimaryButton: React.FC<PrimaryButton> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button
      bg='blue.400'
      color='white'
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};
