import {
  Flex,
  Box,
  VStack,
  Image,
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
import { DispatchFunction } from '../types/redux';
import FieldInput from './Fields/FieldInput';
import { PrimaryButton } from './UI/Buttons';
import { initialState, reducer } from '../store/reducers/main';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { MainForm } from './MainForm';
import { FieldNumber } from './Fields/FieldNumber';
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CheckIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Fruit } from './Fruit';
import { FruitsType } from '../types';
import { FieldSelect } from './Fields/FieldSelect';
import { calculator, Operator } from '../utils/calculator';
import { EqArr, validateEq } from '../utils/validateEq';
import { FruitsDisplay } from './FruitsDisplay';
import { storeResults } from '../store/actions/main';

interface FirstFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

export const FirstForm: React.FC<FirstFormProps> = ({ dispatch, history }) => {
  const { name, surname } = useSelector<
    typeof initialState,
    ReturnType<typeof reducer>
  >((state) => state);

  return (
    <MainForm>
      <Box textAlign='center' mb={14} mt={4}>
        <Heading letterSpacing='2px' mb={3}>
          Hello!
        </Heading>
        <Heading fontSize='3xl'>
          Today we are going to learn about basic arithmetic operations
        </Heading>
      </Box>
      <Flex w='100%' h='75%'>
        <Box flex={3} d='flex' justifyContent='center' alignItems='center'>
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
                <VStack w='70%' m='auto' spacing={10}>
                  <FieldInput
                    label='First, enter your name'
                    name='name'
                    placeholder='First Name'
                    required
                  />
                  <FieldInput
                    label='Second, enter your surname'
                    name='surname'
                    placeholder='Surname'
                    required
                  />
                  <PrimaryButton type='submit' alignSelf='flex-end' w='150px'>
                    Next
                  </PrimaryButton>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
        <Box flex={1} h='100%'>
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

interface SecondFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

export const SecondForm: React.FC<SecondFormProps> = ({
  dispatch,
  history,
}) => {
  // This is how you handle useSelector with ypescript
  // eslint-disable-next-line no-restricted-globals
  const { name, city, age } = useSelector<
    typeof initialState,
    ReturnType<typeof reducer>
  >((state) => state);

  return (
    <MainForm>
      {name ? (
        <>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading letterSpacing='2px' mb={3}>
              {`Welcome ${name}!`}
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
                    <VStack w='70%' m='auto' spacing={10}>
                      <FieldInput
                        label={`What city do you live in ${name}?`}
                        name='city'
                        placeholder='City'
                        required
                      />
                      <FieldNumber
                        label={`How old are you ${name}?`}
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
                      Next
                    </PrimaryButton>
                  </Form>
                )}
              </Formik>
            </Box>
            <Box flex={1} h='100%' zIndex='1'>
              <Image
                src='http://vtxcski.org/img/c1e74532a2196f4fc026c638d94ac6cb.png'
                h='100%'
                mx='auto'
                pos='relative'
                bottom='180px'
                left='100px'
                transform='rotate(15deg)'
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
              Previous
            </PrimaryButton>
          </Flex>
        </>
      ) : (
        <Redirect to='/calculator' />
      )}
    </MainForm>
  );
};

interface ThirdFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

export const ThirdForm: React.FC<ThirdFormProps> = ({ dispatch, history }) => {
  const { name } = useSelector<typeof initialState, ReturnType<typeof reducer>>(
    (state) => state
  );

  const learnMathHandler = (value: boolean) => {
    dispatch({ type: 'BATCH', payload: { learnMath: false } });
    history.push('/calculator/3');
  };
  console.log('inital name', name);

  return (
    <MainForm>
      {name ? (
        <>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading letterSpacing='2px' mb={3}>
              {`Do you want to learn math, ${name}?`}
            </Heading>
          </Box>
          <Flex
            w='100%'
            h='75%'
            overflow='hidden'
            justify='center'
            alignItems='center'
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
                YES
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
                NO
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
            Previous
          </PrimaryButton>
        </>
      ) : (
        <Redirect to='/calculator' />
      )}
    </MainForm>
  );
};

interface FourthFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

const fruits: {
  fruit: FruitsType;
  img: string;
  text: string;
  color: string;
}[] = [
  {
    fruit: 'banana',
    img: '/banana.png',
    text: 'Banana',
    color: 'yellow',
  },
  {
    fruit: 'apple',
    img: '/apple.png',
    text: 'Apple',
    color: 'green',
  },
  {
    fruit: 'orange',
    img: '/orange.png',
    text: 'Orange',
    color: 'orange',
  },
];

export const FourthForm: React.FC<FourthFormProps> = ({
  dispatch,
  history,
}) => {
  const { name } = useSelector<typeof initialState, typeof initialState>(
    (state) => state
  );

  const fruitHandler = (fruit: 'banana' | 'orange' | 'apple') => {
    dispatch({
      type: 'BATCH',
      payload: {
        fruit,
      },
    });
    history.push('/calculator/4');
  };

  return (
    <MainForm>
      {name ? (
        <>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading letterSpacing='2px' mb={3}>
              {`Select your favorite fruit, ${name}?`}
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
                text={fruit.text}
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
            Previous
          </PrimaryButton>
        </>
      ) : (
        <Redirect to='/calculator' />
      )}
    </MainForm>
  );
};

interface FifthFormProps extends RouteChildrenProps {
  dispatch: DispatchFunction<typeof initialState>;
}

export const FifthForm: React.FC<FifthFormProps> = ({ dispatch, history }) => {
  // This is how you handle useSelector with ypescript
  // eslint-disable-next-line no-restricted-globals
  const { name, fruit, correctnessSimple } = useSelector<
    typeof initialState,
    typeof initialState
  >((state) => state);
  const [alert, setAlert] = useState<'success' | 'error' | null>(null);
  const [guesses, setGuesses] = useState<number>(
    correctnessSimple?.matches || 0
  );
  const previousEq = useRef<EqArr | null>();
  const fruitRef = useRef<HTMLImageElement>(null);

  return (
    <MainForm autoHeight>
      {name ? (
        <>
          <Text textAlign='right'>
            Correct guesses:{' '}
            <Text as='span' color='green'>
              {guesses}
            </Text>{' '}
            (get 3 correct guesses to continue)
          </Text>
          <Box textAlign='center' mb={14} mt={4}>
            <Heading mb={3}>
              {`Let's see how subtraction and addition is done!`}
            </Heading>
            <Heading mb={3}>
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
                  operator: '+',
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
                        calculator: 'simple',
                      }) as any
                    );
                  } else {
                    setAlert('error');
                    if (guesses > 0) setGuesses(guesses - 1);
                    dispatch(
                      storeResults({
                        actionType: 'miss',
                        calculator: 'simple',
                      }) as any
                    );
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
                        w='70%'
                        m='auto'
                        spacing={10}
                        alignItems='flex-start'
                      >
                        <FieldNumber label='' id='operand' min={0} />
                        <FieldSelect
                          label=''
                          id='operator'
                          selectOptions={[
                            {
                              displayValue: '+ (Addition)',
                              id: '+',
                              value: '+',
                            },
                            {
                              displayValue: '- (Subtraction)',
                              id: '-',
                              value: '-',
                            },
                          ]}
                        />
                        <FieldNumber label='' id='operand2' min={0} />
                        <Text fontWeight='bold' fontSize='2xl' pt={2}>
                          =
                        </Text>
                        <FieldNumber
                          label=''
                          id='result'
                          helperText='Use the bananas bellow and guess the result'
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
                          {`${name}, you have ${
                            values.operand
                          } ${fruit}s and someone ${
                            values.operator === '+' ? 'gives' : 'takes from'
                          } you ${
                            values.operand2
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
            <Flex justify='space-between'>
              <PrimaryButton
                onClick={(e) => {
                  history.push('/calculator/3');
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
                    history.push('/calculator/5');
                  }}
                  w='120px'
                  alignSelf='flex-end'
                  rightIcon={<ArrowForwardIcon />}
                >
                  Next
                </PrimaryButton>
              ) : null}
            </Flex>
          </Flex>
        </>
      ) : (
        <Redirect to='/calculator' />
      )}
    </MainForm>
  );
};

export const SixthForm: React.FC<FifthFormProps> = ({ dispatch, history }) => {
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
            <Heading mb={3}>
              Let's see how multiplication and divison is done!
            </Heading>
            <Heading mb={3}>
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
                        w='70%'
                        m='auto'
                        spacing={10}
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
                        <Text fontWeight='bold' fontSize='2xl' pt={2}>
                          =
                        </Text>
                        <FieldNumber
                          label=''
                          id='result'
                          helperText='Use the bananas bellow and guess the result'
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

            <Flex justify='space-between'>
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
