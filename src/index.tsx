import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Middleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ActionType } from './types/redux';
import { reducer } from './store/reducers/main';
// // 1. Import the extendTheme function
// import { extendTheme } from '@chakra-ui/react';

// // 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };
// const theme = extendTheme({ colors });
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (middlewares: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middlewares));
  } else {
    return applyMiddleware(...middlewares);
  }
};

// CREATE ACTION CREATERS AND SEPRATE REDUCER IN NEW FILE

// Combining reducers
// const rootReducer = combineReducers({
// burgerBuilder: burgerBuilderReducer,
// order: orderReducer,
// auth: authReducer,
//   test
// });

// The store itself
const store = createStore(reducer, composeEnhancers([sagaMiddleware]));

// Watchers
// sagaMiddleware.run(watchAuth);
// sagaMiddleware.run(watchBurgerBuilder);
// sagaMiddleware.run(watchOrder);

const app = (
  <Provider store={store}>
    <BrowserRouter basename='/Fruit-Calculator'>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
