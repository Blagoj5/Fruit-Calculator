import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { DispatchFunction } from '../../types/redux';
import { PrimaryButton } from '../UI/Buttons';
import { initialState, reducer } from '../../store/reducers/main';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { MainForm } from '../MainForm';
import { ArrowBackIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { generateCommonResponsive } from '../../utils/generateCommonResponsive';

interface ThirdFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

const lnObjGenerator = (name: string, ln: 0 | 1) => ({
  header: [
    `Do you want to learn math, ${name}?`,
    `Дали сакаш да научиш математика, ${name}`,
  ][ln],
  yes: [`YES`, `ДА`][ln],
  no: ['NO', 'НЕ'][ln],
  btnText2: ['Previous', 'Претходно'][ln],
});

export const ThirdForm: React.FC<ThirdFormProps> = ({ dispatch, history }) => {
  const { name, language } = useSelector<
    typeof initialState,
    ReturnType<typeof reducer>
  >((state) => state);

  const learnMathHandler = (value: boolean) => {
    dispatch({ type: 'BATCH', payload: { learnMath: false } });
    history.push('/calculator/3');
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
            justify='center'
            alignItems='center'
            mb={generateCommonResponsive(8, 'none')}
          >
            <Box
              cursor='pointer'
              mr={10}
              transition='all 0.2s'
              _hover={{
                bg: 'green.100',
              }}
              onClick={() => learnMathHandler(true)}
            >
              <CheckIcon color='green' w={20} h={14} />
              <Text
                color='white'
                bg='green'
                textAlign='center'
                fontWeight={600}
              >
                {lnObj.yes}
              </Text>
            </Box>
            <Box
              cursor='pointer'
              w='75px'
              transition='all 0.2s'
              _hover={{
                bg: 'red.100',
              }}
              onClick={() => learnMathHandler(false)}
            >
              <CloseIcon color='red' w={10} h={14} mx='auto' d='block' />
              <Text color='white' bg='red' textAlign='center' fontWeight={600}>
                {lnObj.no}
              </Text>
            </Box>
          </Flex>
          <PrimaryButton
            onClick={(e) => {
              history.push('/calculator/1');
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
