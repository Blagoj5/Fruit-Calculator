import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router-dom';
// Lazy load this
import {
  FifthForm,
  FirstForm,
  FourthForm,
  SecondForm,
  SixthForm,
  ThirdForm,
} from '../components/Forms';

import { MainForm } from '../components/MainForm';
import { initialState } from '../store/reducers/main';
import { DispatchFunction } from '../types/redux';

// Experimental. Inital state types

interface CalculatorProps extends RouteChildrenProps {}

// Good workflow for redux/reducer/dispatch typescript. Fix it tommorow completly:
// 1. Isolate reducer to a diff file (and add specific types for that reducer, for it's initial values)
// 2. Create action creators and union them/ join them inside the ActionType, type propery all so it has auto complete (DEFINE ALL THE TYPES as const)
// 3. Create sepearet type for dispatch funcions that accepts something similar like the code bellow
const Calculator: React.FC<CalculatorProps> = () => {
  const dispatch = useDispatch<DispatchFunction<typeof initialState>>();

  // ! logic here with useEffect to determine to which step the user is left on. If batch 1 is completed then go to step 2, if batch 3 is completed go to step 4 etc..

  return (
    <Switch>
      <Route
        path='/calculator'
        exact
        children={(props) => <FirstForm dispatch={dispatch} {...props} />}
      />
      <Route
        path='/calculator/1'
        children={(props) => <SecondForm dispatch={dispatch} {...props} />}
      />
      <Route
        path='/calculator/2'
        children={(props) => <ThirdForm dispatch={dispatch} {...props} />}
      />
      <Route
        path='/calculator/3'
        children={(props) => <FourthForm dispatch={dispatch} {...props} />}
      />
      <Route
        path='/calculator/4'
        children={(props) => <FifthForm dispatch={dispatch} {...props} />}
      />
      <Route
        path='/calculator/5'
        children={(props) => <SixthForm dispatch={dispatch} {...props} />}
      />
      <Redirect to='/calculator' />
    </Switch>
  );
};

export default Calculator;
