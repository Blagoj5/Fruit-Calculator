import { useSelector } from 'react-redux';
import React from 'react';
import { initialState } from '../store/reducers/main';

export const useMyStore = () => {
  const store = useSelector((state) => state as typeof initialState);

  return store;
};
