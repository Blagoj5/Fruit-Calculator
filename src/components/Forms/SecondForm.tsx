import { Flex, Box, VStack, Image, Heading } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DispatchFunction } from '../../types/redux';
import FieldInput from '../Fields/FieldInput';
import { PrimaryButton } from '../UI/Buttons';
import { initialState, reducer } from '../../store/reducers/main';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { MainForm } from '../MainForm';
import { FieldNumber } from '../Fields/FieldNumber';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { generateCommonResponsive } from '../../utils/generateCommonResponsive';

interface SecondFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

const lnObjGenerator = (name: string, ln: 0 | 1) => ({
  header: [`Welcome ${name}`, `Добро дојде, ${name}`][ln],
  label: [`What city do you live in ${name}?`, `Каде живееш ${name}?`][ln],
  label2: [`How old are you ${name}?`, `Колку години имаш ${name}?`][ln],
  btnText: ['Next', 'Следно'][ln],
  btnText2: ['Previous', 'Претходно'][ln],
});

export const SecondForm: React.FC<SecondFormProps> = ({
  dispatch,
  history,
}) => {
  // This is how you handle useSelector with ypescript
  // eslint-disable-next-line no-restricted-globals
  const { name, city, age, language } = useSelector<
    typeof initialState,
    ReturnType<typeof reducer>
  >((state) => state);

  const ln = lnObjGenerator(name, language);

  return (
    <MainForm>
      {name ? (
        <>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading letterSpacing='2px' mb={3}>
              {ln.header}
            </Heading>
          </Box>
          <Flex w='100%' h='75%' direction='column' overflow='hidden'>
            <Box
              flex={3}
              d='flex'
              justifyContent='center'
              alignItems='center'
              zIndex='2'
            >
              <Formik
                initialValues={{ age: age || 5, city: city || '' }}
                onSubmit={(values) => {
                  dispatch({
                    type: 'BATCH',
                    payload: values,
                  });
                  // Go to second page
                  history.push('/calculator/2');
                }}
              >
                {({ handleSubmit }) => (
                  <Form
                    style={{ width: '100%' }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    <VStack
                      w={generateCommonResponsive('100%', '70%')}
                      m='auto'
                      spacing={10}
                      mb={generateCommonResponsive('80px', 'none')}
                    >
                      <FieldInput
                        label={ln.label}
                        name='city'
                        placeholder='City'
                        required
                      />
                      <FieldNumber
                        label={ln.label2}
                        id='age'
                        placeholder='Age'
                        formControlStyle={{
                          isRequired: true,
                        }}
                      />
                    </VStack>
                    <PrimaryButton
                      type='submit'
                      alignSelf='flex-end'
                      w='120px'
                      pos='absolute'
                      bottom={4}
                      right={4}
                      rightIcon={<ArrowForwardIcon />}
                    >
                      {ln.btnText}
                    </PrimaryButton>
                  </Form>
                )}
              </Formik>
            </Box>
            <Box
              flex={generateCommonResponsive('none', 1)}
              h={generateCommonResponsive('250px', '100%')}
              pos={generateCommonResponsive('absolute', 'static') as any}
              zIndex='1'
              bottom={0}
            >
              <Image
                src='http://vtxcski.org/img/c1e74532a2196f4fc026c638d94ac6cb.png'
                h='100%'
                mx='auto'
                bottom='180px'
                left='100px'
                pos={generateCommonResponsive(undefined, 'relative') as any}
                transform={
                  generateCommonResponsive(undefined, 'rotate(15deg)') as any
                }
              />
            </Box>
            <PrimaryButton
              onClick={(e) => {
                history.push('/calculator');
              }}
              w='120px'
              // mt={10}
              // alignSelf='flex-start'
              leftIcon={<ArrowBackIcon />}
              pos='absolute'
              bottom={4}
            >
              {ln.btnText2}
            </PrimaryButton>
          </Flex>
        </>
      ) : (
        <Redirect to='/calculator' />
      )}
    </MainForm>
  );
};
