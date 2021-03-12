import { Flex, Box, VStack, Image, Heading } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DispatchFunction } from '../../types/redux';
import FieldInput from '../Fields/FieldInput';
import { PrimaryButton } from '../UI/Buttons';
import { initialState, reducer } from '../../store/reducers/main';
import { RouteChildrenProps } from 'react-router-dom';
import { MainForm } from '../MainForm';
import { generateCommonResponsive } from '../../utils/generateCommonResponsive';

interface FirstFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

const lnObj = {
  header: ['Hello!', 'Здраво!'],
  header2: [
    'Today we are going to learn about basic arithmetic operations',
    'Денес ќе учиме за основните аритметички операции',
  ],
  label: ['First, enter your name', 'Прво, внесете го вашето име'],
  label2: ['Second, enter your surname', 'Второ, внесете го вашето презиме'],
  btnText: ['Next', 'Следно'],
};

export const FirstForm: React.FC<FirstFormProps> = ({ dispatch, history }) => {
  const { name, surname, language: ln } = useSelector<
    typeof initialState,
    ReturnType<typeof reducer>
  >((state) => state);

  return (
    <MainForm>
      <Box textAlign='center' mb={14} mt={4}>
        <Heading
          letterSpacing='2px'
          mb={3}
          fontSize={generateCommonResponsive('2xl', '3xl')}
        >
          {lnObj.header[ln]}
        </Heading>
        <Heading fontSize={generateCommonResponsive('xl', '3xl')}>
          {lnObj.header2[ln]}
        </Heading>
      </Box>
      <Flex w='100%' h='75%' overflow='hidden'>
        <Box
          flex={3}
          d='flex'
          justifyContent='center'
          alignItems='center'
          zIndex={1}
        >
          <Formik
            initialValues={{ name: name || '', surname: surname || '' }}
            onSubmit={(values) => {
              dispatch({
                type: 'BATCH',
                payload: values,
              });
              // Go to second page
              history.push('/calculator/1');
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
                >
                  <FieldInput
                    label={lnObj.label[ln]}
                    name='name'
                    placeholder='First Name'
                    required
                  />
                  <FieldInput
                    label={lnObj.label2[ln]}
                    name='surname'
                    placeholder='Surname'
                    required
                  />
                  <PrimaryButton
                    type='submit'
                    alignSelf='flex-end'
                    w={generateCommonResponsive('100%', '150px')}
                  >
                    {lnObj.btnText[ln]}
                  </PrimaryButton>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
        <Box
          flex={1}
          h={generateCommonResponsive('50%', '100%')}
          pos={generateCommonResponsive('absolute', 'static') as any}
          right={0}
          bottom={4}
        >
          <Image
            src='https://i.pinimg.com/originals/d0/82/d2/d082d2fe54e5d21a251e5daeda61f10d.png'
            h='100%'
            mx='auto'
          />
        </Box>
      </Flex>
    </MainForm>
  );
};
