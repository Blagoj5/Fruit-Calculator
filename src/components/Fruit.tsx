import { Box, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';

interface FruitsProps {
  href: string;
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  text: string;
  color: string;
}

export const Fruit: React.FC<FruitsProps> = ({
  href,
  onClick,
  text,
  color,
}) => {
  return (
    <Flex
      cursor='pointer'
      mr={10}
      transition='all 0.2s'
      _hover={{
        bg: `${color}.100`,
      }}
      onClick={onClick}
      w='300px'
      borderRadius='md'
      direction='column'
      justify='flex-end'
    >
      {/* <Image src={href} h='90px' w='100%' /> */}
      <Image src={href} w='100%' mb={2} p={4} />
      <Text
        bg={color}
        textAlign='center'
        fontWeight={600}
        p={1}
        borderRadius='md'
      >
        {text}
      </Text>
    </Flex>
  );
};
