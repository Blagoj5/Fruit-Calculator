import { Flex, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { DispatchFunction } from '../../types/redux';
import { PrimaryButton } from '../UI/Buttons';
import { initialState } from '../../store/reducers/main';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { MainForm } from '../MainForm';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Fruit } from '../Fruit';
import { FruitsType } from '../../types';

interface FourthFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

const fruits: {
  fruit: FruitsType;
  img: string;
  text: [string, string];
  color: string;
}[] = [
  {
    fruit: 'banana',
    img: `/Fruit-Calculator/fruits/banana.png`,
    text: ['Banana', 'Банана'],
    color: 'yellow',
  },
  {
    fruit: 'apple',
    img: `/Fruit-Calculator/fruits/apple.png`,
    text: ['Apple', 'Јаболко'],
    color: 'green',
  },
  {
    fruit: 'orange',
    img: `/Fruit-Calculator/fruits/orange.png`,
    text: ['Orange', 'Портокал'],
    color: 'orange',
  },
];

const lnObjGenerator = (name: string, ln: 0 | 1) => ({
  header: [
    `Select your favourite fruit, ${name}:`,
    `Одбери го твоето омилено овошје, ${name}:`,
  ][ln],
  btnText2: ['Previous', 'Претходно'][ln],
});

export const FourthForm: React.FC<FourthFormProps> = ({
  dispatch,
  history,
}) => {
  const { name, language } = useSelector<
    typeof initialState,
    typeof initialState
  >((state) => state);

  const fruitHandler = (fruit: 'banana' | 'orange' | 'apple') => {
    dispatch({
      type: 'BATCH',
      payload: {
        fruit,
      },
    });
    history.push('/calculator/4');
  };

  const lnObj = lnObjGenerator(name, language);

  return (
    <MainForm>
      {name ? (
        <>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading letterSpacing='2px' mb={3}>
              {lnObj.header}
            </Heading>
          </Box>
          <Flex
            w='100%'
            h='75%'
            overflow='hidden'
            justify='space-evenly'
            alignItems='stretch'
            mb={8}
          >
            {fruits.map((fruit) => (
              <Fruit
                key={fruit.fruit}
                color={fruit.color}
                href={fruit.img}
                text={fruit.text[language]}
                onClick={() => fruitHandler(fruit.fruit)}
              />
            ))}
          </Flex>
          <PrimaryButton
            onClick={(e) => {
              history.push('/calculator/2');
            }}
            w='120px'
            // mt={10}
            // alignSelf='flex-start'
            leftIcon={<ArrowBackIcon />}
          >
            {lnObj.btnText2}
          </PrimaryButton>
        </>
      ) : (
        <Redirect to='/calculator' />
      )}
    </MainForm>
  );
};
