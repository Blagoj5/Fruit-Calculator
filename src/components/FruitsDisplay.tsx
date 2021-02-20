import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FruitsType } from '../types';
import { calculator, Operator } from '../utils/calculator';

interface FruitsDisplayProps {
  values: {
    operator: string;
    operand: number;
    operand2: number;
    result: number;
  };
  fruit: FruitsType;
  fruitRef: React.RefObject<HTMLImageElement>;
}

export const FruitsDisplay: React.FC<FruitsDisplayProps> = ({
  values,
  fruit,
  fruitRef,
}) => {
  let result = calculator(
    values.operand,
    values.operand2,
    values.operator as Operator
  );
  // Inteval used for knowing whenever the final result it's plus or minus
  let interval;
  if (result < 0) {
    // - interval
    interval = 'You own: ';

    // Make sure result is positive
    result = Math.abs(result);
  }

  let decimalValue;
  // If number is decimal
  if (result % 1 !== 0) {
    // if 5.5432 -> get the 5432 and first index is 5
    decimalValue = `${result}`.split('.')[1];
    if (decimalValue) decimalValue = decimalValue[0];
    result = Math.floor(result);
  }

  let prefix: number | undefined;
  let rest: number | undefined;
  let fruitArray: any[] = [];
  let fruitArray2: any[] = [];
  if (result > 10) {
    // Seprate them if 55, -> 5 x 10 visual bananas and  5 bananas sepratly
    prefix = Math.floor(result / 10);
    fruitArray = Array.from({ length: 10 }, (v, i) => i);

    // This number is from 0-9
    rest = result % 10;
    fruitArray2 = Array.from({ length: rest }, (v, i) => i);
  } else {
    // Create fruit array with result as length
    fruitArray = Array.from({ length: result }, (v, i) => i);
  }

  return (
    <Box zIndex='1'>
      {interval && (
        <Text textAlign='center' fontWeight='600' fontSize='xl' mb={4}>
          {interval}
        </Text>
      )}
      <HStack spacing={1} maxW='75%' mx='auto'>
        {prefix && prefix !== 1 ? (
          <Box
            flexBasis='auto'
            minW='110px'
            fontSize='lg'
            fontWeight='bold'
          >{`${prefix} packets of`}</Box>
        ) : null}
        {fruitArray.map((f) => (
          <Box flexBasis='auto' key={f} ref={fruitRef}>
            <Image
              src={`/${fruit}.png`}
              h='100%'
              w='100%'
              maxH='150px'
              maxW='150px'
            />
          </Box>
        ))}
        {decimalValue && fruitArray2.length === 0 ? (
          <Box flexBasis='auto' fontWeight={600} fontSize='lg' minW='107.5px'>
            and {`${decimalValue}-tenths of ${fruit}`}
          </Box>
        ) : null}
      </HStack>
      {fruitArray2.length > 0 ? (
        <HStack spacing={1} maxW='75%' mx='auto' mt={6}>
          <Box flexBasis='auto' minW='110px' fontSize='lg' fontWeight='bold'>
            and
          </Box>
          {fruitArray2.map((f) => (
            <Box
              flexBasis='auto'
              key={f}
              w={fruitRef.current?.getClientRects()[0].width || 'auto'}
              h={fruitRef.current?.getClientRects()[0].height || 'auto'}
            >
              <Image
                src={`/${fruit}.png`}
                w='100%'
                h='100%'
                maxH='150px'
                maxW='150px'
              />
            </Box>
          ))}
          {decimalValue ? (
            <Box flexBasis='auto' fontWeight={600} fontSize='lg' minW='107.5px'>
              and {`${decimalValue}-tenths of ${fruit}`}
            </Box>
          ) : null}
        </HStack>
      ) : null}
    </Box>
  );
};
