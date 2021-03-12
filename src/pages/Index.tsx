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
import { useMyStore } from '../hooks/useMyStore';

interface IndexProps {}

const lnObj = {
  header: ['Welcome to Fruit Calculator', 'Овошен Калкулатор, добро дојдовте!'],
  text: [
    `Calculator made for kids with special needs that uses visual elements
          (fruits) to represent numbers and the final result of the calculations`,
    `Калкулатор направен за деца со посебни потреби кој користи визуелни елементи (овошје) за да претставува броеви и крајниот резултат на пресметките`,
  ],
  text2: ['Play', 'Играј'],
  text3: ['Why Fruit Calculator?', 'Зошто овошен калкулатор?'],
};

const Index: React.FC<IndexProps> = (...props) => {
  const { language } = useMyStore();
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
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
    >
      <Flex
        flex={1}
        h='100%'
        direction='column'
        justifyContent='center'
        w={{ base: '100%', lg: 'auto' }}
        mb={{ base: 8, lg: 'none' }}
      >
        <Heading size='lg' mb={4}>
          {lnObj.header[language]}
        </Heading>
        <Text mb={5}>{lnObj.text[language]}</Text>
        <Flex>
          <PrimaryButtonLink href='/calculator' w='100px' mr={4}>
            {lnObj.text2[language]}
          </PrimaryButtonLink>
          <PrimaryButtonLink
            href='/about'
            variant='outline'
            w='190px'
            whiteSpace='break-spaces'
          >
            {lnObj.text3[language]}
          </PrimaryButtonLink>
        </Flex>
      </Flex>
      <Box flex={{ base: 'none', lg: 2 }} w={{ base: '100%', lg: 'auto' }}>
        <AspectRatio ratio={16 / 9}>
          <Image src='/fruit-calc.gif' h='100%' w='100%' />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Index;
