import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';
import { PrimaryButtonLink } from '../components/UI/Buttons';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Box
      w='75%'
      mx='auto'
      d='flex'
      boxShadow='2xl'
      p={4}
      height='600px'
      alignItems='center'
      justifyContent='space-evenly'
      bg='whiteAlpha.900'
      borderRadius='md'
    >
      <Flex flex={1} h='100%' direction='column' justifyContent='center'>
        <Heading size='lg' mb={4}>
          Welcome to Fruit Calculator
        </Heading>
        <Text mb={5}>
          Calculator made for kids with special needs that uses visual elements
          (fruits) to represent numbers and the final result of the calculations
        </Text>
        <Flex>
          <PrimaryButtonLink href='/calculator' w='100px' mr={4}>
            Play
          </PrimaryButtonLink>
          <PrimaryButtonLink href='/about' variant='outline' w='190px'>
            Why Fruit Calculator?
          </PrimaryButtonLink>
        </Flex>
      </Flex>
      <Box flex={2}>
        <AspectRatio ratio={16 / 9}>
          <Image src='/fruit-calc.gif' h='100%' w='100%' />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Index;
