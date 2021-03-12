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

const lnObjGeneratorStandard = (ln: number) => ({
  header: [
    `Let's see how multiplication and division is done!`,
    `Ајде да видиме како се прави множење и делење!`,
  ][ln],
  header2: [
    `Choose values to see how the final result will change `,
    `Изберете вредности во полињата долу за да видите како ќе се промени конечниот резултат`,
  ][ln],
  btnText2: ['Previous', 'Претходно'][ln],
  btnText: ['Final Results', 'Резултати'][ln],
});

const lnObjGenerator = (
  name: string,
  ln: 0 | 1,
  values: {
    operator: string;
    operand: number;
    operand2: number;
    fruit: string;
  }
) => ({
  helperTextFruits: [
    values.operator === '*'
      ? `${name}, you have ${values.operand} packets of ${values.operand2} ${values.fruit}s. How many do you have now?`
      : `${name}, you have ${values.operand} ${values.fruit}s separated in ${values.operand2} packs, how many ${values.fruit}s does each pack have?`,
    values.operator === '*'
      ? `${name}, имаш ${values.operand} пакети од по ${values.operand2} ${values.fruit}s. Колку имаш сега?`
      : `${name}, имаш ${values.operand} ${values.fruit}s поделени во ${values.operand2} пакети, Колку ${values.fruit}s има секој од пакетите?`,
  ][ln],
});

export const SixthForm: React.FC<SixthFormProps> = ({ dispatch, history }) => {
  // This is how you handle useSelector with ypescript
  const {
    name,
    fruit,
    correctnessAdvanced,
    correctnessSimple,
    language,
  } = useSelector<typeof initialState, typeof initialState>((state) => state);
  const [alert, setAlert] = useState<'success' | 'error' | null>(null);
  const [guesses, setGuesses] = useState<number>(
    correctnessAdvanced?.matches || 0
  );
  const previousEq = useRef<EqArr | null>();
  const fruitRef = useRef<HTMLImageElement>(null);

  const lnObjBasic = lnObjGeneratorStandard(language);
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
              {lnObjBasic.header}
            </Heading>
            <Heading mb={3} fontSize={generateCommonResponsive('xl', '3xl')}>
              {lnObjBasic.header2}
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
                  const lnObj = lnObjGenerator(name, language, {
                    fruit: fruit || 'apple',
                    operand: values.operand,
                    operand2: values.operand2,
                    operator: values.operator,
                  });

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
                          {/* {values.operator === '*'
                            ? `${name}, you have ${values.operand} packets of ${values.operand2} ${fruit}. How many do you have now?`
                            : `${name}, you have ${values.operand} ${fruit} separated in ${values.operand2} packs, how many apples does each pack have?`} */}
                          {lnObj.helperTextFruits}
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
                {lnObjBasic.btnText2}
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
                  {lnObjBasic.btnText}
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
