import { Box } from '@chakra-ui/react';
import React from 'react';
import { generateCommonResponsive } from '../utils/generateCommonResponsive';

interface MainFormProps {
  children: JSX.Element | JSX.Element[] | string;
  autoHeight?: boolean;
}

export const MainForm: React.FC<MainFormProps> = ({ children, autoHeight }) => {
  return (
    <Box
      w='75%'
      mx='auto'
      d='flex'
      flexDirection='column'
      boxShadow='2xl'
      p={4}
      h={generateCommonResponsive('auto', autoHeight ? 'auto' : '600px')}
      justifyContent='flex-start'
      bg='whiteAlpha.900'
      borderRadius='md'
      pos='relative'
      overflow='hidden'
    >
      {children}
    </Box>
  );
};
