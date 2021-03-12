import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { MainForm } from '../components/MainForm';
import { generateCommonResponsive } from '../utils/generateCommonResponsive';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <MainForm>
      <Box w={generateCommonResponsive('100%', '50%')} mx='auto' mt={16}>
        <Heading fontSize='3xl' textAlign='center' mb={6}>
          About Us
        </Heading>
        <Text fontSize='lg'>
          At Fruit Calculator, we believe there is a better and funner way for
          children with special needs to learn math. A more valuable, less
          invasive way where customers are earned rather than bought. We're
          obsessively passionate about it, and our mission is to help kids learn
          math much faster and easier. We focus on the 4 basic aritmetic
          operations (subtraction, addition, division and multiplication) and
          finding creative way to teach them (by using fruits).
        </Text>
      </Box>
    </MainForm>
  );
};

export default About;
