import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router-dom';
// Lazy load this
import { FifthForm } from '../components/Forms/FifthForm';
import { FourthForm } from '../components/Forms/FourthForm';
import { ThirdForm } from '../components/Forms/ThirdForm';
import { FirstForm } from '../components/Forms/FirstForm';
import { initialState } from '../store/reducers/main';
import { DispatchFunction } from '../types/redux';
import { SecondForm } from '../components/Forms/SecondForm';
import { SixthForm } from '../components/Forms/SixthForm';

// Experimental. Inital state types

interface CalculatorProps extends RouteChildrenProps {}

// Good workflow for redux/reducer/dispatch typescript. Fix it tommorow completly:
// 1. Isolate reducer to a diff file (and add specific types for that reducer, for it's initial values)
// 2. Create action creators and union them/ join them inside the ActionType, type propery all so it has auto complete (DEFINE ALL THE TYPES as const)
// 3. Create sepearet type for dispatch funcions that accepts something similar like the code bellow
const Calculator: React.FC<CalculatorProps> = () => {
  const dispatch = useDispatch<DispatchFunction<typeof initialState>>();

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
