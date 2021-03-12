import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { PrimaryButton } from '../UI/Buttons';
import { storeResults } from '../../store/actions/main';
import { initialState } from '../../store/reducers/main';
import { DispatchFunction } from '../../types/redux';
import { Operator, calculator } from '../../utils/calculator';
import { EqArr, validateEq } from '../../utils/validateEq';
import { FieldNumber } from '../Fields/FieldNumber';
import { FieldSelect } from '../Fields/FieldSelect';
import { FruitsDisplay } from '../FruitsDisplay';
import { MainForm } from '../MainForm';
import { generateCommonResponsive } from '../../utils/generateCommonResponsive';

export interface SixthFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

export const SixthForm: React.FC<SixthFormProps> = ({ dispatch, history }) => {
  // This is how you handle useSelector with ypescript
  const { name, fruit, correctnessAdvanced, correctnessSimple } = useSelector<
    typeof initialState,
    typeof initialState
  >((state) => state);
  const [alert, setAlert] = useState<'success' | 'error' | null>(null);
  const [guesses, setGuesses] = useState<number>(
    correctnessAdvanced?.matches || 0
  );
  const previousEq = useRef<EqArr | null>();
  const fruitRef = useRef<HTMLImageElement>(null);

  return (
    <MainForm autoHeight>
      {name && correctnessSimple ? (
        <>
          <Text textAlign='right'>
            Correct guesses:{' '}
            <Text as='span' color='green'>
              {guesses}
            </Text>{' '}
            (get 3 correct guesses to continue)
          </Text>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading mb={3} fontSize={generateCommonResponsive('xl', '3xl')}>
              Let's see how multiplication and divison is done!
            </Heading>
            <Heading mb={3} fontSize={generateCommonResponsive('xl', '3xl')}>
              Choose values to see how the final result will change
            </Heading>
          </Box>
          <Flex w='100%' minH='75%' direction='column'>
            {alert && (
              <Box w='75%' mx='auto' mb={6}>
                <Alert status={alert} borderRadius='lg'>
                  <AlertIcon />
                  {alert === 'success'
                    ? 'Correct. You get 1 point!'
                    : 'Wrong. Try again'}
                </Alert>
              </Box>
            )}
            <Box
              flex={3}
              d='flex'
              justifyContent='center'
              alignItems='center'
              zIndex='2'
            >
              <Formik
                initialValues={{
                  operator: '*',
                  operand: 0,
                  operand2: 0,
                  result: 0,
                }}
                onSubmit={(values) => {
                  //  if eq is same as old one
                  if (
                    !validateEq(previousEq.current, [
                      values.operand,
                      values.operand2,
                      values.operator as Operator,
                      values.result,
                    ])
                  ) {
                    // don't do nothing
                    return;
                  }

                  if (
                    calculator(
                      values.operand,
                      values.operand2,
                      values.operator as Operator
                    ) === values.result
                  ) {
                    setAlert('success');
                    setGuesses(guesses + 1);
                    dispatch(
                      storeResults({
                        actionType: 'hit',
                        calculator: 'advanced',
                      }) as any
                    );
                  } else {
                    setAlert('error');
                    dispatch(
                      storeResults({
                        actionType: 'miss',
                        calculator: 'advanced',
                      }) as any
                    );
                    if (guesses > 0) setGuesses(guesses - 1);
                  }

                  previousEq.current = [
                    values.operand,
                    values.operand2,
                    values.operator as Operator,
                    values.result,
                  ];
                }}
              >
                {({ handleSubmit, values }) => {
                  return (
                    <Form
                      style={{ width: '100%' }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}
                    >
                      <HStack
                        w={generateCommonResponsive('100%', '70%')}
                        m='auto'
                        spacing={generateCommonResponsive(1, 10)}
                        flexWrap={
                          generateCommonResponsive('wrap', 'nowrap') as any
                        }
                        alignItems='flex-start'
                      >
                        <FieldNumber label='' id='operand' min={0} />
                        <FieldSelect
                          label=''
                          id='operator'
                          selectOptions={[
                            {
                              displayValue: '* (multiplication)',
                              id: '*',
                              value: '*',
                            },
                            {
                              displayValue: '/ (devision)',
                              id: '/',
                              value: '/',
                            },
                          ]}
                        />
                        <FieldNumber label='' id='operand2' min={0} />
                        <Text
                          fontWeight='bold'
                          fontSize='2xl'
                          pt={2}
                          textAlign={
                            generateCommonResponsive('center', 'left') as any
                          }
                          w={generateCommonResponsive('100%', 'auto') as any}
                        >
                          =
                        </Text>
                        <FieldNumber
                          label=''
                          id='result'
                          helperText='Use the bananas bellow and guess the result'
                          step={0.5}
                        />
                      </HStack>
                      <Box w='70%' mx='auto' mt={6}>
                        <PrimaryButton
                          type='submit'
                          w='150px'
                          ml='auto'
                          d='block'
                        >
                          Guess
                        </PrimaryButton>
                      </Box>
                      <Box
                        w='80%'
                        mx='auto'
                        mt={6}
                        fontWeight={600}
                        fontSize='xl'
                        mb={4}
                      >
                        <Text textAlign='center'>
                          {`${name},  someone ${
                            values.operator === '*' ? 'gives' : 'takes from'
                          } you ${values.operand2} packets of  ${
                            values.operand
                          } ${fruit}s. How many do you have now?`}
                        </Text>
                      </Box>
                      <FruitsDisplay
                        values={values}
                        fruit={fruit || 'banana'}
                        fruitRef={fruitRef}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </Box>

            <Flex justify='space-between' alignItems='center'>
              <PrimaryButton
                onClick={(e) => {
                  history.push('/calculator/4');
                }}
                w='120px'
                alignSelf='flex-start'
                leftIcon={<ArrowBackIcon />}
              >
                Previous
              </PrimaryButton>
              {guesses >= 3 ? (
                <PrimaryButton
                  onClick={(e) => {
                    history.push('/me');
                  }}
                  w='150px'
                  alignSelf='flex-end'
                  rightIcon={<ArrowForwardIcon />}
                >
                  Final Results
                </PrimaryButton>
              ) : null}
            </Flex>
          </Flex>
        </>
      ) : (
        <Redirect to='/calculator/4' />
      )}
    </MainForm>
  );
};
