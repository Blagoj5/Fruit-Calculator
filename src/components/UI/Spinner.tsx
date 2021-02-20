import React from 'react';
import { Spinner as SpinenrRb } from 'react-bootstrap';

interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '90vh',
        alignItems: 'center',
      }}
    >
      <SpinenrRb animation='border' />
    </div>
  );
};
